
import { Application } from 'egg';
// type模型
module.exports = (app:Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const Type = app.model.define('types', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type_name: STRING(30),
    type_title: STRING(30),
  },
  { timestamps: false },
  );
  return Type;
//   return class extends Type {
//     static assocaite() {
//       app.model.User.hasMany(app.model.Type, { as: 'types' });
//     }
//   };
};
