/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:46:31
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 11:47:49
 */
import store from "@/store";
import defaultSettings from "@/settings";

/**
 * 动态修改标题
 */
export function useDynamicTitle() {
  if (store.state.settings.dynamicTitle) {
    document.title = store.state.settings.title + " - " + defaultSettings.title;
  } else {
    if (defaultSettings.title) {
      document.title = defaultSettings.title.toString();
    }
  }
}
