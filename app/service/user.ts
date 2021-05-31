/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-07 15:11:44
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-21 16:22:18
 */
import { Service } from 'egg';
// import { Code } from '../utils/util';
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
export default class UserService extends Service {
//   public async index() {
//     const { ctx } = this;
//     const res:any = await ctx.model.User.all({});
//     return Object.assign({}, Code.SUCCESS, {
//       data: res,
//     });
//   }

  async index() {
    const page = 1,
      count = 10;
    const { ctx } = this;
    const list = await this.ctx.model.User.findAll({
      include: [{ model: ctx.model.Type, as: 'types' }],
      offset: (page - 1) * count,
      order: [[ 'id', 'DESC' ]],
      attributes: [ 'id', 'title', 'name', 'img_url', 'type_id' ],
    });
    return list;
  }
  async show() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  async create() {
    const ctx = this.ctx;
    const { title, name } = ctx.request.body;
    const user = await ctx.model.User.create({ title, name });
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    await user.update(ctx.request.body);
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    await user.destroy();
  }


}
