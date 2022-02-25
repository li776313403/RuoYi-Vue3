/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 18:57:38
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 19:01:42
 */
import { TreeSelect } from '@/entity/pageEntity'
import { ReturnResult } from '@/entity/sysEntity'
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

// 查询部门列表
export function listDept(query) {
    return request({
        url: '/system/dept/list',
        method: 'get',
        params: query
    })
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(deptId) {
    return request({
        url: '/system/dept/list/exclude/' + deptId,
        method: 'get'
    })
}

// 查询部门详细
export function getDept(deptId) {
    return request({
        url: '/system/dept/' + deptId,
        method: 'get'
    })
}

// 查询部门下拉树结构
export function treeselect(): AxiosPromise<ReturnResult<Array<TreeSelect>>> {
    return request({
        url: '/system/dept/treeselect',
        method: 'get'
    })
}

// 根据角色ID查询部门树结构
export function roleDeptTreeselect(roleId) {
    return request({
        url: '/system/dept/roleDeptTreeselect/' + roleId,
        method: 'get'
    })
}

// 新增部门
export function addDept(data) {
    return request({
        url: '/system/dept',
        method: 'post',
        data: data
    })
}

// 修改部门
export function updateDept(data) {
    return request({
        url: '/system/dept',
        method: 'put',
        data: data
    })
}

// 删除部门
export function delDept(deptId) {
    return request({
        url: '/system/dept/' + deptId,
        method: 'delete'
    })
}