/*
 * @Descripttion:字典管理API
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 17:05:40
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 18:43:45
 */
import { ReturnResult, SysDictData } from '@/entity/sysEntity'
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

// 查询字典数据列表
export function listData(query: any) {
    return request({
        url: '/system/dict/data/list',
        method: 'get',
        params: query
    })
}

// 查询字典数据详细
export function getData(dictCode) {
    return request({
        url: '/system/dict/data/' + dictCode,
        method: 'get'
    })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType: string): AxiosPromise<ReturnResult<Array<SysDictData>>> {
    return request({
        url: '/system/dict/data/type/' + dictType,
        method: 'get'
    })
}

// 新增字典数据
export function addData(data) {
    return request({
        url: '/system/dict/data',
        method: 'post',
        data: data
    })
}

// 修改字典数据
export function updateData(data) {
    return request({
        url: '/system/dict/data',
        method: 'put',
        data: data
    })
}

// 删除字典数据
export function delData(dictCode) {
    return request({
        url: '/system/dict/data/' + dictCode,
        method: 'delete'
    })
}
