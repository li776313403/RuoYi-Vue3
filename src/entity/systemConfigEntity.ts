/*
 * @Descripttion:系统配置相关实体类
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 10:32:24
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 11:27:50
 */

/**
 * @description:生产环境配置项
 */
class EnvDevelopment {
  /**
   * @description:页面标题
   */
  VITE_APP_TITLE: String | "";
  /**
   * @description:开发环境配置
   */
  VITE_APP_ENV: String | "";
  /**
   * @description:若依管理系统/开发环境
   */
  VITE_APP_BASE_API: String | "";
  /**
   * @description:开发打包开关
   */
  VITE_USE_MOCK_ENV: String | "";
  /**
   * @description:生产打包开关
   */
  VITE_USE_MOCK_PRO: String | "";
}

/**
 * @description:开发环境配置项
 */
class EnvProduction {
  /**
   * @description: 页面标题
   */
  VITE_APP_TITLE: String | "";
  /**
   * @description: 生产环境配置
   */
  VITE_APP_ENV: String | "";
  /**
   * @description: 若依管理系统/生产环境
   */
  VITE_APP_BASE_API: String | "";
  /**
   * @description: 是否在打包时开启压缩，支持 gzip 和 brotli
   */
  VITE_BUILD_COMPRESS: String | "";
}

export { EnvDevelopment, EnvProduction };
