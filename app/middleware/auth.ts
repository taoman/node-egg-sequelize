/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-04-02 10:05:22
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-07 16:37:10
 */
module.exports = options => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.token.substring(7);
    if (token) {
      try {
        ctx.app.jwt.verify(token, options.secret);
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          msg: 'token已过期，请重新登录',
          code: -1,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        msg: 'token不存在',
      };
      return;
    }
  };
};
