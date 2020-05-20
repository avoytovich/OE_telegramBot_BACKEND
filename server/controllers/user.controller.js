const passwordHash = require('password-hash');

const { User } = require('./../models');

module.exports = {
  // create(req, res) {
  //   User.findOne({
  //     where: {
  //       email: req.body.email,
  //     },
  //   })
  //     .then((user) => {
  //       (user &&
  //         passwordHash.verify(req.body.password, user.password) &&
  //         res.status(400).json({ message: 'Email already in use' })) ||
  //         User.create({
  //           email: req.body.email,
  //           password: passwordHash.generate(req.body.password),
  //           isActivated: false,
  //         }).then((user) => {
  //           res.status(200).json({
  //             message:
  //               'Congratulation, you will be informed by email, once your account will be activated',
  //           });
  //         });
  //     })
  //     .catch((error) => res.status(404).send(error));
  // },
};
