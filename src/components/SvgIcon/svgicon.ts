/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-25 15:37:36
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-25 15:37:37
 */
import * as components from '@element-plus/icons-vue'

export default {
    install: (app) => {
        for (const key in components) {
            const componentConfig = components[key];
            app.component(componentConfig.name, componentConfig);
        }
    },
};
