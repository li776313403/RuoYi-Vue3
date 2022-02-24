/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 19:04:05
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 19:13:02
 */
import Cookies from 'js-cookie'

const state = {
    sidebar: {
        opened: !(Cookies.get('sidebarStatus') !== undefined && Cookies.get('sidebarStatus') !== null),
        withoutAnimation: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'default'
}

const mutations = {
    TOGGLE_SIDEBAR: (state: { sidebar: { opened: boolean; withoutAnimation: boolean } }) => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', '1')
        } else {
            Cookies.set('sidebarStatus', '0')
        }
    },
    CLOSE_SIDEBAR: (state: { sidebar: { opened: boolean; withoutAnimation: any } }, withoutAnimation: any) => {
        Cookies.set('sidebarStatus', '0');
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state: { device: any }, device: any) => {
        state.device = device
    },
    SET_SIZE: (state: { size: any }, size: string | object) => {
        state.size = size
        Cookies.set('size', size)
    }
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }: any, device: any) {
        commit('TOGGLE_DEVICE', device)
    },
    setSize({ commit }: any, size: any) {
        commit('SET_SIZE', size)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
