const {
  userController,
  loginController,
  followerController,
} = require('./../controllers');

module.exports = (app) => {
  app.get('/test', (req, res) =>
    res.status(200).send({
      message: 'Welcome',
    })
  );

  app.post('/login', loginController.login);
  app.post('/token', loginController.refreshToken);

  // app.get('/user/:id', userController.retrieve);
  // app.get('/user/:id/user_list', userController.list);
  // app.post('/user/:id/user_activate', userController.activation);
  // app.post('/user/:id/user_deactivate', userController.deactivation);
  // app.delete('/user/:id/user_delete', userController.delete);

  app.post('/follower_create', followerController.create);
  // app.get('/user/:id/follower_list', followerController.list);
  // app.delete('/user/:id/follower_delete', followerController.delete);
};
