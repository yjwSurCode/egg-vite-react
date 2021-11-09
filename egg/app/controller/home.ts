import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // const { username } = ctx.query; 使用接口 这里的开发方式还是挺多的
    // const { ctx } = this;
    //const { id } = ctx.params;
    // egg-cors 这个 npm 包来解决跨域问题。

    ctx.body = await ctx.service.test.sayHi("egg");
  }
}
