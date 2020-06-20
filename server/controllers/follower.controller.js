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
    Follower.findAll()
      .then((followers) => res.status(200).json({ followers }))
      .catch((error) => res.status(404).send(error));
  },
  delete(req, res) {
    const followersIds = req.body.map((each) => each.id);
    Follower.destroy({ where: { id: followersIds } })
      .then((followers) => res.status(200).json({ followers }))
      .catch((error) => res.status(404).send(error));
  },
};
