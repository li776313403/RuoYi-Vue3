/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 10:25:24
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 11:28:59
 */
import vue from "@vitejs/plugin-vue";

import createAutoImport from "./auto-import";
import createSvgIcon from "./svg-icon";
import createCompression from "./compression";
import createSetupExtend from "./setup-extend";
import { EnvDevelopment } from "../../src/entity/systemConfigEntity";

export default function createVitePlugins(
  viteEnv: EnvDevelopment,
  isBuild: boolean = false
) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  isBuild && vitePlugins.push(...createCompression(viteEnv));
  return vitePlugins;
}
