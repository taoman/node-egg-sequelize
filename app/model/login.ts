/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-04-02 10:42:59
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-06 17:02:55
 */
import { Application } from 'egg';
module.exports = (app:Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const login = app.model.define('userlists', {
    user_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(20),
    password: STRING(20),
  }, {
    timestamps: false,
  },
  );
  return login;
};
