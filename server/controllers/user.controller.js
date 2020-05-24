const { Op } = require('sequelize');

const { User, Profile } = require('./../models');

module.exports = {
  retrieve(req, res) {
    User.findOne({
      where: { id: req.params.id },
    })
      .then((user) => res.status(200).json({ user }))
      .catch((error) => res.status(404).send(error));
  },
  list(req, res) {
    User.findAll({
      where: { id: { [Op.not]: req.params.id } },
    })
      .then((users) => res.status(200).json({ users }))
      .catch((error) => res.status(404).send(error));
  },
  activation(req, res) {
    User.findById(req.body.id)
      .then((user) => {
        user.update({
          isActivated: true,
        }) &&
          Profile.findOne({
            where: { UserId: req.body.id },
          }).then((profile) => {
            !profile &&
              Profile.create({
                UserId: req.body.id,
              });
          });
        res.status(200).json({
          message: 'User is activated, you have to sent mail!',
        });
      })
      .catch((error) => res.status(400).send(error));
  },
  deactivation(req, res) {
    User.findById(req.body.id)
      .then((user) => {
        user.update({
          isActivated: false,
        });
        res.status(200).json({
          message: 'User is deactivated, you have to sent mail!',
        });
      })
      .catch((error) => res.status(400).send(error));
  },
};
