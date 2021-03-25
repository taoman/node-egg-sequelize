/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-20 10:49:47
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-23 09:49:33
 */


import { Application } from 'egg';
module.exports = (app:Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const config = app.model.define('configs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    key: STRING(10),
    value: STRING,
  }, {
    timestamps: false,
  },
  );

  // config.associate = function() {
  //   app.model.config.belongsTo(app.model.User, { foreignKey: 'id' });
  // };
  return config;
};
