/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-07 15:06:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-24 14:06:47
 */
import { Application } from 'egg';
// user模型
module.exports = (app:Application) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // const User = app.model.define('users', {
  //   id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  //   title: STRING(50),
  //   name: STRING(30),
  //   type_id: INTEGER,
  //   created_at: DATE(6),
  //   updated_at: DATE(6),
  // },
  const User = app.model.define('leavemessage', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    message: STRING(200),
    name: STRING(50),
    type_id: INTEGER,
    created_at: DATE(6),
    updated_at: DATE(6),
  },
  { timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  );
  // return User;
  return class extends User {
    static associate() {
      app.model.User.belongsTo(app.model.Type, { as: 'types', foreignKey: 'type_id' });
    }
  };
};
