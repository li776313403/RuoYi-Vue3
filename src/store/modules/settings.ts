/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 19:26:51
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 19:34:43
 */
import defaultSettings from '@/settings'
import { useDynamicTitle } from '@/utils/dynamicTitle'

const { sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo, dynamicTitle } = defaultSettings
let layoutSetting: string | null;
let storageSetting: any | null;
layoutSetting = localStorage.getItem('layout-setting');
storageSetting = layoutSetting ? JSON.parse(layoutSetting) : '';

const state = {
    title: '',
    theme: storageSetting.theme || '#409EFF',
    sideTheme: storageSetting.sideTheme || sideTheme,
    showSettings: showSettings,
    topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
    tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
    fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
    sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo,
    dynamicTitle: storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle
}
const mutations = {
    CHANGE_SETTING: (state: { [x: string]: any; hasOwnProperty: (arg0: any) => any; }, { key, value }: any) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
}

const actions = {
    // 修改布局设置
    changeSetting({ commit }: any, data: any) {
        commit('CHANGE_SETTING', data)
    },
    // 设置网页标题
    setTitle({ }: any, title: string) {
        state.title = title
        useDynamicTitle();
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

