/*
 * @Descripttion:系统基础表
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:26:20
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 14:51:06
 */

/**
 * @description:字典
 */
class Dic {
  /**
   * @description:创建者
   */
  createBy: string | "";
  /**
   * @description:创建时间
   */
  createTime: Date | null;
  /**
   * @description:更新者
   */
  updateBy: string | "";
  /**
   * @description:更新时间
   */
  updateTime: Date | null;
  /**
   * @description:备注
   */
  remark: string | "";
  /**
   * @description:
   */
  params: object | null;
  /**
   * @description:字典编码
   */
  dictCode: number | -1;
  /**
   * @description:字典排序
   */
  dictSort: number | -1;
  /**
   * @description:字典标签
   */
  dictLabel: string | "";
  /**
   * @description:字典键值
   */
  dictValue: string | "";
  /**
   * @description:字典类型
   */
  dictType: string | "";
  /**
   * @description:样式属性
   */
  cssClass: string | "";
  /**
   * @description:表格字典样式
   */
  listClass: string | "";
  /**
   * @description:是否默认
   */
  isDefault: string | "";
  /**
   * @description:状态
   */
  status: string | "";
  /**
   * @description:
   */
  default: boolean | false;
}

/**
 * @description:后端返回通知数据
 */
class ReturnResult<T = any> {
  /**
   * @description:状态码
   */
  code: number | -1;
  /**
   * @description:返回数据
   */
  data: T | null;
  /**
  * @description:提示信息
  */
  msg: string | '';
  /**
   * @description:token
   */
  token: string | '';
}

/**
 * @description:后端返回验证码数据
 */
class ReturnResultImg {
  /**
  * @description:是否开启验证码
  */
  captchaOnOff: boolean | true;
  /**
   * @description:状态码
   */
  code: number | -1;
  /**
  * @description:图片信息
  */
  img: string | '';
  /**
  * @description:提示信息
  */
  msg: string | '';
  /**
  * @description:uuid
  */
  uuid: string | '';
}

/**
 * @description:后端返回用户数据
 */
class ReturnResultUser {
  /**
 * @description:状态码
 */
  code: number | -1;
  /**
  * @description:图片信息
  */
  img: string | '';
  /**
   * @description:权限信息
   */
  permissions: Array<string> | [];
  /**
   * @description:角色
   */
  roles: Array<string> | [];
  /**
   * @description:用户信息
   */
  user: any;
}

export { Dic, ReturnResult, ReturnResultImg, ReturnResultUser };
