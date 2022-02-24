/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 18:54:47
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 19:03:41
 */
const getters = {
    sidebar: (state: { app: { sidebar: any } }) => state.app.sidebar,
    size: (state: { app: { size: string } }) => state.app.size,
    device: (state: { app: { device: string } }) => state.app.device,
    visitedViews: (state: { tagsView: { visitedViews: any } }) => state.tagsView.visitedViews,
    cachedViews: (state: { tagsView: { cachedViews: any } }) => state.tagsView.cachedViews,
    token: (state: { user: { token: string } }) => state.user.token,
    avatar: (state: { user: { avatar: string } }) => state.user.avatar,
    name: (state: { user: { name: string } }) => state.user.name,
    introduction: (state: { user: { introduction: any } }) => state.user.introduction,
    roles: (state: { user: { roles: any } }) => state.user.roles,
    permissions: (state: { user: { permissions: any } }) => state.user.permissions,
    permission_routes: (state: { permission: { routes: any } }) => state.permission.routes,
    topbarRouters: (state: { permission: { topbarRouters: any } }) => state.permission.topbarRouters,
    defaultRoutes: (state: { permission: { defaultRoutes: any } }) => state.permission.defaultRoutes,
    sidebarRouters: (state: { permission: { sidebarRouters: any } }) => state.permission.sidebarRouters,
}
export default getters