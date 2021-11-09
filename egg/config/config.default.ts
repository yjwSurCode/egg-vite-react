import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
const path = require("path");
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1636438561164_4047";

  // add your egg config in here
  config.middleware = [];

  //定义view
  config.view = {
    root: [
      path.join(appInfo.baseDir, "app/view"),
      // path.join(appInfo.baseDir, "path/to/another"),
    ].join(","),
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
