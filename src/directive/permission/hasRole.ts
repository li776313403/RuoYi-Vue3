/*
 * @Descripttion: 角色权限处理
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 10:25:01
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 10:25:01
 */
import store from '@/store'

export default {
    mounted(el: { parentNode: { removeChild: (arg0: any) => any; }; }, binding: { value: any; }) {
        const { value } = binding
        const super_admin = "admin";
        const roles = store.getters && store.getters.roles

        if (value && value instanceof Array && value.length > 0) {
            const roleFlag = value

            const hasRole = roles.some((role: string) => {
                return super_admin === role || roleFlag.includes(role)
            })

            if (!hasRole) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`请设置角色权限标签值"`)
        }
    }
}
