/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 10:11:01
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 10:14:09
 */
import router from "./router";
import store from "./store";
import { ElMessage } from "element-plus";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";
import { isHttp } from "@/utils/validate";
import { RouteRecordRaw } from "vue-router";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/auth-redirect", "/bind", "/register"];

router.beforeEach((to, _from, next) => {
  NProgress.start();
  if (getToken()) {
    to.meta.title && store.dispatch("settings/setTitle", to.meta.title);
    /* has token*/
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store
          .dispatch("GetInfo")
          .then(() => {
            store.dispatch("GenerateRoutes").then((accessRoutes) => {
              // 根据roles权限生成可访问的路由表
              accessRoutes.forEach((route: RouteRecordRaw) => {
                if (!isHttp(route.path)) {
                  router.addRoute(route); // 动态添加可访问路由表
                }
              });
              next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
            });
          })
          .catch((err) => {
            store.dispatch("LogOut").then(() => {
              ElMessage.error(err);
              next({ path: "/" });
            });
          });
      } else {
        next();
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
