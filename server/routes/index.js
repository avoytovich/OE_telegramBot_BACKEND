const {
  userController,
  loginController,
  groupOfBookmarkController,
  subGroupOfBookmarkController,
  bookmarkController,
} = require('./../controllers');

module.exports = (app) => {
  app.get('/test', (req, res) =>
    res.status(200).send({
      message: 'Welcome',
    })
  );

  app.post('/login', loginController.login);
  app.get('/activation/:token', loginController.activation);
  app.post('/token', loginController.refreshToken);

  app.post('/user_create', userController.create);

  app.post('/user/:id/group_create', groupOfBookmarkController.create);
  app.get('/user/:id/group_list', groupOfBookmarkController.list);
  app.delete('/user/:id/groups_delete', groupOfBookmarkController.delete);

  app.post(
    '/user/:id/group/:group/subgroup_create',
    subGroupOfBookmarkController.create
  );
  app.get(
    '/user/:id/group/:group/subgroup_list',
    subGroupOfBookmarkController.list
  );
  app.delete(
    '/user/:id/group/:group/subgroup_delete',
    subGroupOfBookmarkController.delete
  );

  app.post(
    '/user/:id/group/:group/subgroup/:subgroup/bookmark_create',
    bookmarkController.create
  );
  app.get(
    '/user/:id/group/:group/subGroup/:subgroup/bookmark_list',
    bookmarkController.list
  );
  app.delete(
    '/user/:id/group/:group/subGroup/:subgroup/bookmark_delete',
    bookmarkController.delete
  );
};
