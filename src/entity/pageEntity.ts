/*
 * @Descripttion:页面展示
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 12:01:13
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-25 13:58:10
 */

/**
 * @description:键值对
 */
class SelectOption {
  elTagType: string | null | undefined;
  /**
   * @description:文字
   */
  label: string | null | undefined;
  /**
   * @description:编号
   */
  value: string | null | undefined;
}

/**
 * @description:树
 */
class TreeSelect {
  /**
   * @description: 编号
   */
  id: number | null | undefined;
  /**
   * @description: 文字
   */
  label: string | null | undefined;
  /**
  * @description: 子级
  */
  children: Array<TreeSelect> | null | undefined;
}

/**
 * @description:表格列信息
 */
class TableColumnInfo {
  /**
   * @description: 键
   */
  key: number | null | undefined;
  /**
   * @description: 值
   */
  label: string | null | undefined;
  /**
   * @description: 是否隐藏
   */
  visible: boolean | null | undefined;
}

export { SelectOption, TreeSelect, TableColumnInfo };
