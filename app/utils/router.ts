/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-03-01 10:02:26
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-01 11:14:23
 */
// interface RouterType {
//   methods:string,
//   path:string,
//   controller:string
// }
class Router {
  constructor(public methods: any, public path: any, public controller: any) {}
  //   methods:string;
  //   path:string;
  //   controller:any;
}
const routes = function(controller) {
  return [
    new Router('get', '/', controller.home.index),
    new Router('get', '/user', controller.user.index),
    new Router('get', '/show/:id', controller.user.show),
    new Router('post', '/create', controller.user.create),
    new Router('delete', '/destory/:id', controller.user.destory),
    new Router('patch', '/update/:id', controller.user.update),
    new Router('get', '/config', controller.config.ConfigIndex),
  ];
};
module.exports = {
  routes,
};
