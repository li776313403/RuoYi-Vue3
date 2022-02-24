/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 10:20:41
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 10:22:08
 */
import store from '@/store'
import router from '@/router'
import { RouteLocationRaw } from 'vue-router';

export default {
  // 刷新当前tab页签
  async refreshPage(obj:any) {
    const { path, query, matched } = router.currentRoute.value;
    if (obj === undefined) {
      matched.forEach((m) => {
        if (m.components && m.components.default && m.components.default.name) {
          if (!['Layout', 'ParentView'].includes(m.components.default.name)) {
            obj = { name: m.components.default.name, path: path, query: query };
          }
        }
      });
    }
    await store.dispatch('tagsView/delCachedView', obj);
        const { path: path_1, query: query_1 } = obj;
        router.replace({
            path: '/redirect' + path_1,
            query: query_1
        });
  },
  // 关闭当前tab页签，打开新页签
  closeOpenPage(obj: RouteLocationRaw | undefined) {
    store.dispatch("tagsView/delView", router.currentRoute.value);
    if (obj !== undefined) {
      return router.push(obj);
    }
  },
  // 关闭指定tab页签
  async closePage(obj: any) {
    if (obj === undefined) {
      const { lastPath } = await store.dispatch('tagsView/delView', router.currentRoute.value);
        return await router.push(lastPath || '/index');
    }
    return store.dispatch('tagsView/delView', obj);
  },
  // 关闭所有tab页签
  closeAllPage() {
    return store.dispatch('tagsView/delAllViews');
  },
  // 关闭左侧tab页签
  closeLeftPage(obj: any) {
    return store.dispatch('tagsView/delLeftTags', obj || router.currentRoute.value);
  },
  // 关闭右侧tab页签
  closeRightPage(obj: any) {
    return store.dispatch('tagsView/delRightTags', obj || router.currentRoute.value);
  },
  // 关闭其他tab页签
  closeOtherPage(obj: any) {
    return store.dispatch('tagsView/delOthersViews', obj || router.currentRoute.value);
  },
  // 打开tab页签
  openPage(url: RouteLocationRaw) {
    return router.push(url);
  },
  // 修改tab页签
  updatePage(obj: any) {
    return store.dispatch('tagsView/updateVisitedView', obj);
  }
}
