/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 10:07:35
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 14:38:49
 */
import { ReturnResult, ReturnResultImg } from "@/entity/sysEntity";
import request from "@/utils/request";
import { AxiosPromise } from "axios";

// 登录方法
export function login(username: string, password: string, code: string, uuid: string): AxiosPromise<ReturnResult> {
  const data = {
    username,
    password,
    code,
    uuid,
  };
  return request({
    url: "/login",
    headers: {
      isToken: "false",
    },
    method: "post",
    data: data,
  });
}

// 注册方法
export function register(data) {
  return request({
    url: "/register",
    headers: {
      isToken: "false",
    },
    method: "post",
    data: data,
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: "/getInfo",
    method: "get",
  });
}

// 退出方法
export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}

// 获取验证码
export function getCodeImg(): AxiosPromise<ReturnResultImg> {
  return request({
    url: "/captchaImage",
    headers: {
      isToken: "false",
    },
    method: "get",
    timeout: 20000,
  });
}
