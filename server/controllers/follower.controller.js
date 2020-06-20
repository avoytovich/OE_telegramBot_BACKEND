const { Follower } = require('./../models');

module.exports = {
  create(req, res) {
    Follower.create(req.body)
      .then((follower) =>
        res.status(200).json({ message: 'Follower was created!' })
      )
      .catch((error) => res.status(404).send(error));
  },
  list(req, res) {
    // Follower.findAll({
    //   where: { UserId: req.params.id },
    // })
    //   .then((groups) => res.status(200).json({ groups }))
    //   .catch((error) => res.status(404).send(error));
  },
  delete(req, res) {
    // const groupsIds = req.body.map((each) => each.id);
    // Follower.destroy({ where: { id: groupsIds } })
    //   .then((groups) => res.status(200).json({ groups }))
    //   .catch((error) => res.status(404).send(error));
  },
};
