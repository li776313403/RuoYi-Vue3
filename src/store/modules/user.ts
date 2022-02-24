/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 19:37:10
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 14:39:33
 */
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import defAva from '@/assets/images/profile.jpg'
import { ReturnResult, ReturnResultUser } from "@/entity/sysEntity"
import { AxiosResponse } from 'axios'

const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        roles: [],
        permissions: []
    },

    mutations: {
        SET_TOKEN: (state: { token: any }, token: any) => {
            state.token = token
        },
        SET_NAME: (state: { name: any }, name: any) => {
            state.name = name
        },
        SET_AVATAR: (state: { avatar: any }, avatar: any) => {
            state.avatar = avatar
        },
        SET_ROLES: (state: { roles: any }, roles: any) => {
            state.roles = roles
        },
        SET_PERMISSIONS: (state: { permissions: any }, permissions: any) => {
            state.permissions = permissions
        }
    },

    actions: {
        // 登录
        Login({ commit }: any, userInfo: { username: string; password: string; code: string; uuid: string }) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise<void>((resolve, reject) => {
                login(username, password, code, uuid).then((res: AxiosResponse<ReturnResult>) => {
                    setToken(res.data.token)
                    commit('SET_TOKEN', res.data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo().then((res: AxiosResponse<ReturnResultUser>) => {
                    const user = res.data.user
                    const avatar = user.avatar == "" ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;

                    if (res.data.roles && res.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', res.data.roles)
                        commit('SET_PERMISSIONS', res.data.permissions)
                    } else {
                        commit('SET_ROLES', ['ROLE_DEFAULT'])
                    }
                    commit('SET_NAME', user.userName)
                    commit('SET_AVATAR', avatar)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 退出系统
        LogOut({ commit }) {
            return new Promise<void>((resolve, reject) => {
                logout().then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    commit('SET_PERMISSIONS', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise<void>(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve();
            })
        }
    }
}

export default user
