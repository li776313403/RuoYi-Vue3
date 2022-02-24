/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 14:40:22
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 14:41:34
 */
import { ReturnResult } from '@/entity/sysEntity'
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

// 获取路由
export const getRouters = (): AxiosPromise<ReturnResult> => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}