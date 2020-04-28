const { GroupOfBookmarks } = require('./../models');

module.exports = {
  create(req, res) {
    const dataCreate = Object.assign({}, req.body, { UserId: req.decoded.id });
    GroupOfBookmarks.create(dataCreate)
      .then((groupOfBookmarks) =>
        res.status(200).json({ message: 'groupOfBookmarks was created!' })
      )
      .catch((error) => res.status(404).send(error));
  },
  list(req, res) {
    GroupOfBookmarks.findAll({
      where: { UserId: req.params.id },
    })
      .then((groups) => res.status(200).json({ groups }))
      .catch((error) => res.status(404).send(error));
  },
  delete(req, res) {
    const groupsIds = req.body.map((each) => each.id);
    GroupOfBookmarks.destroy({ where: { id: groupsIds } })
      .then((groups) => res.status(200).json({ groups }))
      .catch((error) => res.status(404).send(error));
  },
};
