/*
 * @Descripttion:系统基础表
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:26:20
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 21:03:52
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
 * @description:后端返回数据
 */
class ReturnResult {
  /**
 * @description:状态码
 */
  code: number | -1;
  /**
* @description:提示信息
*/
  msg: string | '';
  /**
 * @description:token
 */
  token: string | '';
}


export { Dic, ReturnResult };
