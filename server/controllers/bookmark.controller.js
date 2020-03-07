const { Bookmarks } = require('./../models');

module.exports = {
    create(req, res) {
        const dataCreate = Object.assign({}, req.body, {SubGroupOfBookmarksId: req.params.subGroup})
        Bookmarks.create(dataCreate)
            .then(bookmark => res.status(200).json({message: 'bookmark was created!'}))
            .catch(error => res.status(404).send(error));
    }
};
