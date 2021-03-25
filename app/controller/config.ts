/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-20 10:52:00
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-20 11:16:27
 */
import { Controller } from 'egg';
export default class ConfigController extends Controller {
  async ConfigIndex() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      mesg: 'config请求成功',
      data: await ctx.service.config.index(),
    };
  }
}
