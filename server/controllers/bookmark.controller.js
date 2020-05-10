const { Bookmarks } = require('./../models');

module.exports = {
  create(req, res) {
    const dataCreate = Object.assign({}, req.body, {
      SubGroupOfBookmarksId: req.params.subgroup,
    });
    Bookmarks.create(dataCreate)
      .then((bookmark) =>
        res.status(200).json({ message: 'bookmark was created!' })
      )
      .catch((error) => res.status(404).send(error));
  },
  list(req, res) {
    Bookmarks.findAll({
      where: { SubGroupOfBookmarksId: req.params.subgroup },
    })
      .then((bookmarks) => res.status(200).json({ bookmarks }))
      .catch((error) => res.status(404).send(error));
  },
  delete(req, res) {
    const bookmarksIds = req.body.map((each) => each.id);
    Bookmarks.destroy({ where: { id: bookmarksIds } })
      .then((bookmarks) => res.status(200).json({ bookmarks }))
      .catch((error) => res.status(404).send(error));
  },
};
