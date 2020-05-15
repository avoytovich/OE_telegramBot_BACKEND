const { Op } = require('sequelize');
const { Bookmarks } = require('./../models');

module.exports = {
  list(req, res) {
    Bookmarks.findAll({
      where: {
        searchWords: { [Op.contains]: [req.query.searchWords] },
      },
    })
      .then((bookmarks) => res.status(200).json({ bookmarks }))
      .catch((error) => res.status(404).send(error));
  },
};
