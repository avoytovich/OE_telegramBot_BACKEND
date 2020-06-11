const { extract } = require('article-parser');

module.exports = {
  retrieve(req, res) {
    extract(req.query.articleParser)
      .then((article) => res.status(200).json({ article }))
      .catch((error) => res.status(404).send(error));
  },
};
