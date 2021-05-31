/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-07 15:09:33
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-16 13:58:00
 */
import { Controller } from 'egg';
// function parseInt(str: string | number) {
//   if (typeof str === 'number') return str;
//   if (!str) return 0;
//   return parseInt(str) || 0;
// }
export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    // const query = {
    //   limit: parseInt(ctx.query.limit),
    //   offset: parseInt(ctx.query.offset),
    // };
    ctx.body = {
      status: 200,
      msg: '列表请求成功',
      data: await ctx.service.user.index(),
    };
  }
  async show() {
    const { ctx } = this;
    ctx.body = { msg: '请求详情', data: await ctx.service.user.show() };
  }
  async create() {
    const { ctx } = this;
    await ctx.service.user.create();
    ctx.body = {
      status: 200,
      msg: '创建成功',
    };
  }
  async destory() {
    const { ctx } = this;
    await ctx.service.user.destroy();
    ctx.body = {
      status: 200,
      msg: '删除成功',
    };
  }
  async update() {
    const { ctx } = this;
    await ctx.service.user.update();
    ctx.body = {
      status: 200,
      msg: '更新成功',
    };
  }
}
