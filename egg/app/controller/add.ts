import { Controller } from "egg";

export default class AddController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log(ctx.query);

    const headers = {
      "Content-Type": "text/xml",
    };
    ctx.set(headers);
    const res = {
      res: ctx.query,
      code: 200,
    };
    return (ctx.body = res);
    // ctx.body = await ctx.service.add.addM("egg");
  }
}
