/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-20 10:50:55
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-20 11:16:09
 */
import { Service } from 'egg';
export default class ConfigService extends Service {
  async index() {
    const { ctx } = this;
    return ctx.model.Cofig.findAll({
      order: [[ 'id', 'ASC' ]],
    });
  }
}
