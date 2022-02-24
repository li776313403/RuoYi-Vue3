/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 10:23:41
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 10:23:42
 */
import hasRole from './permission/hasRole'
import hasPermi from './permission/hasPermi'
import { App } from 'vue-demi'

export default function directive(app: App<Element>){
  app.directive('hasRole', hasRole)
  app.directive('hasPermi', hasPermi)
}