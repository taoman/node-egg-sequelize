/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-04-02 11:02:46
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-07 16:14:00
 */
import { Controller } from 'egg';
export default class LoginController extends Controller {
  public async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const { result } = await ctx.service.login.login(username, password);
    if (result.length > 0) {
      const token = app.jwt.sign({
        username,
      }, app.config.jwt.secret, { expiresIn: '10m' });

      ctx.set({ token });
      ctx.body = {
        code: '200',
        data: [{
          token,
          username: result[0].username,
          user_id: result[0].user_id,
        }],
        msg: 'success',
      };
    } else {
      ctx.body = {
        code: '401',
        data: result,
        msg: '账号或密码错误',
      };
    }
  }
  public async getUser() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: 'success',
      data: await ctx.service.login.userLists(),
    };
  }
}
