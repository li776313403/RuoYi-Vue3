/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 10:54:35
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 10:54:35
 */
import autoImport from "unplugin-auto-import/vite";

export default function createAutoImport() {
  return autoImport({
    imports: [
      "vue",
      "vue-router",
      {
        vuex: ["useStore"],
      },
    ],
    dts: false,
  });
}