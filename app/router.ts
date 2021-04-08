import { Application } from 'egg';
const { routes } = require('./utils/router');
export default (app: Application) => {
  const { controller, router, middleware } = app;
  routes(controller).forEach(r => {
    router[r.methods](r.path, r.controller);
  });
  const jwtErr = middleware.auth(app.config.jwt);
  router.get('/userList', jwtErr, controller.login.getUser);
  // router.post('/login', controller.login.login);
  // router.post('/admin', jwt, controller.login.index);
  // router.get('/user', controller.user.index);
  // router.get('/show/:id', controller.user.show);
  // router.post('/create', controller.user.create);
  // router.delete('/destory/:id', controller.user.destory);
  // router.patch('/update/:id', controller.user.update);
  // router.get('/config', controller.config.ConfigIndex);
};
