/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 14:09:10
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 14:13:32
 */
import axios from "axios";
import {
  ElNotification,
  ElMessageBox,
  ElMessage,
  ElLoading,
} from "element-plus";
import store from "@/store";
import { getToken } from "@/utils/auth";
import errorCode from "@/utils/errorCode";
import { tansParams, blobValidate } from "@/utils/ruoyi";
import cache from "@/plugins/cache";
import { saveAs } from "file-saver";

let downloadLoadingInstance: any;
// 是否显示重新登录
let isReloginShow: boolean;

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
const urlApi =
  import.meta.env.VITE_APP_BASE_API !== null
    ? import.meta.env.VITE_APP_BASE_API?.toString()
    : "";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: urlApi,
  // 超时
  timeout: 10000,
});

// request拦截器
service.interceptors.request.use(
  (config: any) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
    if (getToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?" + tansParams(config.params);
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    if (
      !isRepeatSubmit &&
      (config.method === "post" || config.method === "put")
    ) {
      const requestObj = {
        url: config.url,
        data:
          typeof config.data === "object"
            ? JSON.stringify(config.data)
            : config.data,
        time: new Date().getTime(),
      };
      const sessionObj = cache.session.getJSON("sessionObj");
      if (
        sessionObj === undefined ||
        sessionObj === null ||
        sessionObj === ""
      ) {
        cache.session.setJSON("sessionObj", requestObj);
      } else {
        const s_url = sessionObj.url; // 请求地址
        const s_data = sessionObj.data; // 请求数据
        const s_time = sessionObj.time; // 请求时间
        const interval = 1000; // 间隔时间(ms)，小于此时间视为重复提交
        if (
          s_data === requestObj.data &&
          requestObj.time - s_time < interval &&
          s_url === requestObj.url
        ) {
          const message = "数据正在处理，请勿重复提交";
          console.warn(`[${s_url}]: ` + message);
          return Promise.reject(new Error(message));
        } else {
          cache.session.setJSON("sessionObj", requestObj);
        }
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    // 二进制数据则直接返回
    if (
      res.request.responseType === "blob" ||
      res.request.responseType === "arraybuffer"
    ) {
      return res.data;
    }
    if (code === 401) {
      if (!isReloginShow) {
        isReloginShow = true;
        ElMessageBox.confirm(
          "登录状态已过期，您可以继续留在该页面，或者重新登录",
          "系统提示",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning",
          }
        )
          .then(() => {
            isReloginShow = false;
            store.dispatch("LogOut").then(() => {
              // 如果是登录页面不需要重新加载
              if (window.location.hash.indexOf("#/login") != 0) {
                location.href = "/index";
              }
            });
          })
          .catch(() => {
            isReloginShow = false;
          });
      }
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500) {
      ElMessage({
        message: msg,
        type: "error",
      });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      ElNotification.error({
        title: msg,
      });
      return Promise.reject("error");
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.log("err" + error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({
      message: message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

// 通用下载方法
export async function download(
  url: string,
  params: any,
  filename: string | undefined
): Promise<void> {
  downloadLoadingInstance = ElLoading.service({
    text: "正在下载数据，请稍候",
    background: "rgba(0, 0, 0, 0.7)",
  });
  try {
    const data: any = await service.post(url, params, {
      transformRequest: [
        (params_1) => {
          return tansParams(params_1);
        },
      ],
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      responseType: "blob",
    });
    const isLogin = await blobValidate(data);
    if (isLogin) {
      const blob = new Blob([data]);
      saveAs(blob, filename);
    } else {
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      const errMsg =
        errorCode[rspObj.code] || rspObj.msg || errorCode["default"];
      ElMessage.error(errMsg);
    }
    downloadLoadingInstance.close();
  } catch (r) {
    console.error(r);
    ElMessage.error("下载文件出现错误，请联系管理员！");
    downloadLoadingInstance.close();
  }
}

export default service;
