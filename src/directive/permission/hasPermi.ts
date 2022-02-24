/*
 * @Descripttion: 操作权限处理
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 10:24:07
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 10:25:38
 */
import store from '@/store'

export default {
    mounted(el: { parentNode: { removeChild: (arg0: any) => any; }; }, binding: { value: any; }) {
        const { value } = binding
        const all_permission = "*:*:*";
        const permissions = store.getters && store.getters.permissions

        if (value && value instanceof Array && value.length > 0) {
            const permissionFlag = value

            const hasPermissions = permissions.some((permission: string) => {
                return all_permission === permission || permissionFlag.includes(permission)
            })

            if (!hasPermissions) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`请设置操作权限标签值`)
        }
    }
}
