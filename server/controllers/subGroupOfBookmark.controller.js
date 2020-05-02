const { SubGroupOfBookmarks } = require('./../models');

module.exports = {
  create(req, res) {
    const dataCreate = Object.assign({}, req.body, {
      GroupOfBookmarksId: req.params.group,
    });
    SubGroupOfBookmarks.create(dataCreate)
      .then((groupOfBookmarks) =>
        res.status(200).json({ message: 'subGroupOfBookmarks was created!' })
      )
      .catch((error) => res.status(404).send(error));
  },
  list(req, res) {
    SubGroupOfBookmarks.findAll({
      where: { GroupOfBookmarksId: req.params.group },
    })
      .then((subGroups) => res.status(200).json({ subGroups }))
      .catch((error) => res.status(404).send(error));
  },
};
