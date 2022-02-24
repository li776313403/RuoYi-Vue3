/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 18:54:18
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 18:54:19
 */
import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'

const store = createStore({
    modules: {
        app,
        user,
        tagsView,
        permission,
        settings
    },
    getters
});


export default store