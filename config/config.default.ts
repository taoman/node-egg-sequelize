import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612679586643_5604';

  // add your egg config in here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'egg-sequelize-doc-default',
  };
  config.security = {
    domainWhiteList: [
      '*',
    ],
    csrf: {
      enable: false,
    },
  };
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0',
    },
  };
  config.cors = {
    origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // 设置密钥
  config.jwt = {
    secret: 'dsaldkjl;sakjdl;jasfkl;sakl;fl;m',
  };
  // 不需要token验证的路由
  // config.routerAuth = [ '/login' ];
  config.auth = {
    ignore: [ '/login' ],
  };
  // 挂载中间件
  config.middleware = [ 'auth' ];
  // 添加日志级别为debug
  config.logger = {
    level: 'DEBUG',
    outputJSON: true,
    encoding: 'utf-8',
    consoleLevel: 'DEBUG',
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
