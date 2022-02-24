/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 09:48:13
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 10:15:35
 */
/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 09:46:14
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 09:46:15
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
