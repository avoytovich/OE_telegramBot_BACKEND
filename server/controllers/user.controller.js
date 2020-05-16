const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const { User } = require('./../models');
const secret_key =
  process.env.JWT_SECRET_KEY ||
  require('./../../config/jwt.secretkey.json').key;
const constants = require('./../helper/constants');
const { send } = require('./../helper/mailer');

module.exports = {
  create(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        (user &&
          passwordHash.verify(req.body.password, user.password) &&
          res.status(400).json({ message: 'Email already in use' })) ||
          User.create({
            email: req.body.email,
            password: passwordHash.generate(req.body.password),
            isActivated: false,
          }).then((user) => {
            let token = jwt.sign({ id: user.id }, secret_key, {
              expiresIn: constants.TIME_TOKEN,
            });
            let mailOptions = {
              from: '"soldapp" <soldapp@ukr.net>',
              to: user.email,
              subject: 'Registration for soldApp',
              text: 'click on link to activate your account',
              html: `<b>click on link below to activate your account</b>
                           <a href="http://localhost:8033/activation/${token}">link</a>`,
            };
            send(mailOptions);
            res.status(200).json({
              message: 'Congratulation, check your email for activation',
            });
          });
      })
      .catch((error) => res.status(404).send(error));
  },
};
