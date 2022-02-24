/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 19:13:22
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 19:26:15
 */
import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index.vue'
import ParentView from '@/components/ParentView/index.vue'
import InnerLink from '@/layout/components/InnerLink/index.vue'

// 匹配views里面所有的.vue文件
const modules = import.meta.glob('./../../views/**/*.vue')

const permission = {
    state: {
        routes: [],
        addRoutes: [],
        defaultRoutes: [],
        topbarRouters: [],
        sidebarRouters: []
    },
    mutations: {
        SET_ROUTES: (state: any, routes: Array<any>) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        },
        SET_DEFAULT_ROUTES: (state: any, routes: Array<any>) => {
            state.defaultRoutes = constantRoutes.concat(routes)
        },
        SET_TOPBAR_ROUTES: (state: any, routes: Array<any>) => {
            // 顶部导航菜单默认添加统计报表栏指向首页
            const index = [{
                path: 'index',
                meta: { title: '统计报表', icon: 'dashboard' }
            }]
            state.topbarRouters = routes.concat(index);
        },
        SET_SIDEBAR_ROUTERS: (state: any, routes: Array<any>) => {
            state.sidebarRouters = routes
        },
    },
    actions: {
        // 生成路由
        GenerateRoutes({ commit }) {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRouters().then(res => {
                    const sdata = JSON.parse(JSON.stringify(res.data))
                    const rdata = JSON.parse(JSON.stringify(res.data))
                    const defaultData = JSON.parse(JSON.stringify(res.data))
                    const sidebarRoutes = filterAsyncRouter(sdata)
                    const rewriteRoutes = filterAsyncRouter(rdata, false, true)
                    const defaultRoutes = filterAsyncRouter(defaultData)
                    commit('SET_ROUTES', rewriteRoutes)
                    commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
                    commit('SET_DEFAULT_ROUTES', sidebarRoutes)
                    commit('SET_TOPBAR_ROUTES', defaultRoutes)
                    resolve(rewriteRoutes)
                })
            })
        }
    }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap: any[], _lastRouter = false, type = false) {
    return asyncRouterMap.filter(route => {
        if (type && route.children) {
            route.children = filterChildren(route.children)
        }
        if (route.component) {
            // Layout ParentView 组件特殊处理
            if (route.component === 'Layout') {
                route.component = Layout
            } else if (route.component === 'ParentView') {
                route.component = ParentView
            } else if (route.component === 'InnerLink') {
                route.component = InnerLink
            } else {
                route.component = loadView(route.component)
            }
        }
        if (route.children != null && route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children, route, type)
        } else {
            delete route['children']
            delete route['redirect']
        }
        return true
    })
}

function filterChildren(childrenMap: any[], lastRouter: any | boolean = false) {
    var children = [] as Array<any>;
    childrenMap.forEach((el) => {
        if (el.children && el.children.length) {
            if (el.component === 'ParentView' && !lastRouter) {
                el.children.forEach((c: any) => {
                    c.path = el.path + '/' + c.path
                    if (c.children && c.children.length) {
                        children = children.concat(filterChildren(c.children, c))
                        return
                    }
                    children.push(c)
                })
                return
            }
        }
        if (lastRouter) {
            el.path = lastRouter.path + '/' + el.path
        }
        children = children.concat(el)
    })
    return children
}

export const loadView = (view: string) => {
    let res: any;
    for (const path in modules) {
        const dir = path.split('views/')[1].split('.vue')[0];
        if (dir === view) {
            res = () => modules[path]();
        }
    }
    return res;
}

export default permission
