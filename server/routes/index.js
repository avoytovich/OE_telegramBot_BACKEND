const { 
  userController,
  loginController,
  groupOfBookmarkController,
  subGroupOfBookmarkController,
  bookmarkController
} = require('./../controllers');

module.exports =
  (app) => {
    app.get('/test', (req, res) => res.status(200).send({
      message: 'Welcome'
    }));

    app.post('/login', loginController.login);
    app.get('/activation/:token', loginController.activation);

    app.post('/user_create', userController.create);

    app.post('/user/:id/group_create', groupOfBookmarkController.create);
    app.get('/user/:id/group_list', groupOfBookmarkController.list);

    app.post('/user/:id/group/:group/subGroup_create', subGroupOfBookmarkController.create);

    app.post('/user/:id/group/:group/subGroup/:subGroup/bookmark_create', bookmarkController.create);
  };
