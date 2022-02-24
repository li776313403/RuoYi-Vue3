/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 10:16:59
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 10:24:29
 */
import svgIcon from "vite-plugin-svg-icons";
import path from "path";
import { OptimizeOptions } from 'svgo';

export default function createSvgIcon(isBuild: boolean | OptimizeOptions) {
  return svgIcon({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild,
  });
}
