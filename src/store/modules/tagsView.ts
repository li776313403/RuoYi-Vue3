/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 19:35:10
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 19:36:53
 */
const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    ADD_VISITED_VIEW: (state: { visitedViews: any[] }, view: { path: any; meta: { title: any } }) => {
        if (state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(
            Object.assign({}, view, {
                title: view.meta.title || 'no-name'
            })
        )
    },
    ADD_CACHED_VIEW: (state: { cachedViews: any[] }, view: { name: any; meta: { noCache: any } }) => {
        if (state.cachedViews.includes(view.name)) return
        if (!view.meta.noCache) {
            state.cachedViews.push(view.name)
        }
    },

    DEL_VISITED_VIEW: (state: { visitedViews: any[] }, view: { path: any }) => {
        for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },
    DEL_CACHED_VIEW: (state: { cachedViews: any[] }, view: { name: any }) => {
        const index = state.cachedViews.indexOf(view.name)
        index > -1 && state.cachedViews.splice(index, 1)
    },

    DEL_OTHERS_VISITED_VIEWS: (state: { visitedViews: any[] }, view: { path: any }) => {
        state.visitedViews = state.visitedViews.filter(v => {
            return v.meta.affix || v.path === view.path
        })
    },
    DEL_OTHERS_CACHED_VIEWS: (state: { cachedViews: string | any[] }, view: { name: any }) => {
        const index = state.cachedViews.indexOf(view.name)
        if (index > -1) {
            state.cachedViews = state.cachedViews.slice(index, index + 1)
        } else {
            state.cachedViews = []
        }
    },

    DEL_ALL_VISITED_VIEWS: (state: { visitedViews: any[] }) => {
        // keep affix tags
        const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
        state.visitedViews = affixTags
    },

    DEL_ALL_CACHED_VIEWS: (state: { cachedViews: never[] }) => {
        state.cachedViews = []
    },

    UPDATE_VISITED_VIEW: (state: { visitedViews: any }, view: { path: any }) => {
        for (let v of state.visitedViews) {
            if (v.path === view.path) {
                v = Object.assign(v, view)
                break
            }
        }
    },

    DEL_RIGHT_VIEWS: (state: { visitedViews: any[]; cachedViews: any[] }, view: { path: any }) => {
        const index = state.visitedViews.findIndex(v => v.path === view.path)
        if (index === -1) {
            return
        }
        state.visitedViews = state.visitedViews.filter((item, idx) => {
            if (idx <= index || (item.meta && item.meta.affix)) {
                return true
            }
            const i = state.cachedViews.indexOf(item.name)
            if (i > -1) {
                state.cachedViews.splice(i, 1)
            }
            return false
        })
    },

    DEL_LEFT_VIEWS: (state: { visitedViews: any[]; cachedViews: any[] }, view: { path: any }) => {
        const index = state.visitedViews.findIndex(v => v.path === view.path)
        if (index === -1) {
            return
        }
        state.visitedViews = state.visitedViews.filter((item, idx) => {
            if (idx >= index || (item.meta && item.meta.affix)) {
                return true
            }
            const i = state.cachedViews.indexOf(item.name)
            if (i > -1) {
                state.cachedViews.splice(i, 1)
            }
            return false
        })
    }
}

const actions = {
    addView({ dispatch }: any, view: any) {
        dispatch('addVisitedView', view)
        dispatch('addCachedView', view)
    },
    addVisitedView({ commit }: any, view: any) {
        commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({ commit }: any, view: any) {
        commit('ADD_CACHED_VIEW', view)
    },

    delView({ dispatch, state }: any, view: any) {
        return new Promise(resolve => {
            dispatch('delVisitedView', view)
            dispatch('delCachedView', view)
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    delVisitedView({ commit, state }: any, view: any) {
        return new Promise(resolve => {
            commit('DEL_VISITED_VIEW', view)
            resolve([...state.visitedViews])
        })
    },
    delCachedView({ commit, state }: any, view: any) {
        return new Promise(resolve => {
            commit('DEL_CACHED_VIEW', view)
            resolve([...state.cachedViews])
        })
    },

    delOthersViews({ dispatch, state }: any, view: any) {
        return new Promise(resolve => {
            dispatch('delOthersVisitedViews', view)
            dispatch('delOthersCachedViews', view)
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    delOthersVisitedViews({ commit, state }: any, view: any) {
        return new Promise(resolve => {
            commit('DEL_OTHERS_VISITED_VIEWS', view)
            resolve([...state.visitedViews])
        })
    },
    delOthersCachedViews({ commit, state }: any, view: any) {
        return new Promise(resolve => {
            commit('DEL_OTHERS_CACHED_VIEWS', view)
            resolve([...state.cachedViews])
        })
    },

    delAllViews({ dispatch, state }: any, view: any) {
        return new Promise(resolve => {
            dispatch('delAllVisitedViews', view)
            dispatch('delAllCachedViews', view)
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    delAllVisitedViews({ commit, state }) {
        return new Promise(resolve => {
            commit('DEL_ALL_VISITED_VIEWS')
            resolve([...state.visitedViews])
        })
    },
    delAllCachedViews({ commit, state }) {
        return new Promise(resolve => {
            commit('DEL_ALL_CACHED_VIEWS')
            resolve([...state.cachedViews])
        })
    },

    updateVisitedView({ commit }: any, view: any) {
        commit('UPDATE_VISITED_VIEW', view)
    },

    delRightTags({ commit }: any, view: any) {
        return new Promise(resolve => {
            commit('DEL_RIGHT_VIEWS', view)
            resolve([...state.visitedViews])
        })
    },

    delLeftTags({ commit }: any, view: any) {
        return new Promise(resolve => {
            commit('DEL_LEFT_VIEWS', view)
            resolve([...state.visitedViews])
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
