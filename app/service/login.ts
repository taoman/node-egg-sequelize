/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-04-02 10:37:39
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-07 16:00:45
 */
import { Service } from 'egg';
const crypto = require('crypto');
export default class LoginService extends Service {
  getMd5Data(data:string) {
    return crypto.createHash('md5').update(data).digest('hex');
  }
  async login(username, password) {
    // const psd = this.getMd5Data(password);
    // const data = await this.app.mysql.query(`SELECT * FROM user WHERE username='${username}' and password='${psd}'`);
    const data = await this.ctx.model.Login.findAll({
      where: {
        username,
        password,
      },
    });
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }
  async userLists() {
    const data = await this.ctx.model.Login.findAll({
      order: [[ 'user_id', 'DESC' ]],
    });
    return data;
  }
}
