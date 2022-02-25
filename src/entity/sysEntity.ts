/*
 * @Descripttion:系统基础表
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:26:20
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-25 14:54:55
 */

/**
 * @description:字典数据表
 */
class SysDictData {
  /**
   * @description:创建者
   */
  createBy: string | null | undefined;
  /**
   * @description:创建时间
   */
  createTime: Date | null | undefined;
  /**
   * @description:更新者
   */
  updateBy: string | null | undefined;
  /**
   * @description:更新时间
   */
  updateTime: Date | null | undefined;
  /**
   * @description:备注
   */
  remark: string | null | undefined;
  /**
   * @description:
   */
  params: object | null | undefined;
  /**
   * @description:字典编码
   */
  dictCode: number | null | undefined;
  /**
   * @description:字典排序
   */
  dictSort: number | null | undefined;
  /**
   * @description:字典标签
   */
  dictLabel: string | null | undefined;
  /**
   * @description:字典键值
   */
  dictValue: string | null | undefined;
  /**
   * @description:字典类型
   */
  dictType: string | null | undefined;
  /**
   * @description:样式属性
   */
  cssClass: string | null | undefined;
  /**
   * @description:表格字典样式
   */
  listClass: string | null | undefined;
  /**
   * @description:是否默认
   */
  isDefault: string | null | undefined;
  /**
   * @description:状态
   */
  status: string | null | undefined;
  /**
   * @description:
   */
  default: boolean | null | undefined;
}

/**
 * @description:部门信息表
 */
class SysDept {
  /**
   * @description: 祖级列表
   */
  ancestors: string | null | undefined;
  /**
   * @description: 下级部门列表
   */
  children: Array<SysDept> | null | undefined;
  /**
   * @description: 创建者
   */
  createBy: string | null | undefined;
  /**
   * @description: 创建时间
   */
  createTime: string | null | undefined;
  /**
   * @description: 删除标志（0代表存在 2代表删除）
   */
  delFlag: number | null | undefined;
  /**
   * @description:部门主键
   */
  deptId: number | null | undefined;
  /**
   * @description:部门名称
   */
  deptName: string | null | undefined;
  /**
   * @description:邮箱
   */
  email: string | null | undefined;
  /**
   * @description:负责人
   */
  leader: string | null | undefined;
  /**
   * @description:显示顺序
   */
  orderNum: number | null | undefined;
  params: object | null | undefined;
  /**
   * @description: 父部门id
   */
  parentId: number | null | undefined;
  /**
   * @description: 父部门名称
   */
  parentName: string | null | undefined;
  /**
   * @description: 联系电话
   */
  phone: string | null | undefined;
  /**
   * @description: 备注
   */
  remark: string | null | undefined;
  /**
   * @description: 查询内容
   */
  searchValue: string | null | undefined;
  /**
   * @description: 部门状态（0正常 1停用）
   */
  status: number | null | undefined;
  /**
   * @description: 更新者
   */
  updateBy: string | null | undefined;
  /**
   * @description: 更新时间
   */
  updateTime: string | null | undefined;
}

/**
 * @description:角色信息表
 */
class SysRole {
  /**
   * @description:角色ID
   */
  roleId: number | null | undefined;
  /**
   * @description:角色名称
   */
  roleName: string | null | undefined;
  /**
   * @description:角色权限
   */
  roleKey: string | null | undefined;
  /**
   * @description:角色排序
   */
  roleSort: number | null | undefined;
  /**
   * @description:数据范围（1：全部数据权限 2：自定数据权限）
   */
  dataScope: number | null | undefined;
  /**
   * @description:菜单树选择项是否关联显示
   */
  menuCheckStrictly: number | null | undefined;
  /**
   * @description:部门树选择项是否关联显示
   */
  deptCheckStrictly: number | null | undefined;
  /**
   * @description:角色状态（0正常 1停用）
   */
  status: number | null | undefined;
  /**
   * @description:删除标志（0代表存在 2代表删除）
   */
  delFlag: number | null | undefined;
  /**
   * @description:创建者
   */
  createBy: string | null | undefined;
  /**
   * @description:创建时间
   */
  createTime: string | null | undefined;
  /**
  * @description:更新者
  */
  updateBy: string | null | undefined;
  /**
   * @description:更新时间
   */
  updateTime: string | null | undefined;
  /**
   * @description:备注
   */
  remark: string | null | undefined;
}

/**
 * @description:用户信息表
 */
class SysUser {
  /**
 * @description: 用户ID
 */
  userId: number | null | undefined;
  /**
   * @description: 是否是管理员
   */
  admin: boolean | null | undefined;
  /**
   * @description: 头像路径
   */
  avatar: string | null | undefined;
  /**
  * @description: 创建者
  */
  createBy: string | null | undefined;
  /**
   * @description: 创建时间
   */
  createTime: string | null | undefined;
  /**
   * @description: 删除标志（0代表存在 2代表删除）
   */
  delFlag: number | null | undefined;
  /**
   * @description: 部门信息
   */
  dept: Array<SysDept> | null | undefined;
  /**
  * @description: 部门ID
  */
  deptId: number | null | undefined;
  /**
   * @description: 邮箱
   */
  email: string | null | undefined;
  /**
   * @description: 登录时间
   */
  loginDate: string | null | undefined;
  /**
   * @description: 登录IP
   */
  loginIp: string | null | undefined;
  /**
   * @description: 用户昵称
   */
  nickName: string | null | undefined;
  params: object | null | undefined;
  /**
   * @description: 手机号码
   */
  phonenumber: string | null | undefined;
  /**
   * @description: 岗位组
   */
  postIds: Array<number> | null | undefined;
  /**
   * @description: 备注
   */
  remark: string | null | undefined;
  /**
   * @description: 角色ID
   */
  roleId: number | null | undefined;
  /**
   * @description: 角色组
   */
  roleIds: Array<number> | null | undefined;
  /**
   * @description: 角色对象
   */
  roles: Array<SysRole> | null | undefined;
  /**
   * @description: 搜索值
   */
  searchValue: string | null | undefined;
  /**
   * @description: 用户性别（0男 1女 2未知）
   */
  sex: number | null | undefined;
  /**
   * @description: 帐号状态（0正常 1停用）
   */
  status: number | null | undefined;
  /**
   * @description: 更新者
   */
  updateBy: string | null | undefined;
  /**
   * @description: 更新时间
   */
  updateTime: string | null | undefined;
  /**
   * @description: 更新账户
   */
  userName: string | null | undefined;
}

/**
 * @description: 岗位信息表
 */
class SysPost {
  /**
   * @description: 创建者
   */
  createBy: string | null | undefined;
  /**
   * @description: 创建时间
   */
  createTime: string | null | undefined;
  flag: boolean | null | undefined;
  params: object | null | undefined;
  /**
   * @description: 岗位编码
   */
  postCode: string | null | undefined;
  /**
   * @description: 岗位主键
   */
  postId: number | null | undefined;
  /**
   * @description: 岗位名称
   */
  postName: string | null | undefined;
  /**
   * @description: 显示顺序
   */
  postSort: number | null | undefined;
  /**
  * @description: 备注
  */
  remark: string | null | undefined;
  /**
   * @description: 查询内容
   */
  searchValue: string | null | undefined;
  /**
   * @description: 状态（0正常 1停用）
   */
  status: number | null | undefined;
  /**
   * @description:更新者
   */
  updateBy: string | null | undefined;
  /**
   * @description:更新时间
   */
  updateTime: string | null | undefined;
}
/**
 * @description:后端返回通知数据
 */
class ReturnResult<T = any> {
  /**
   * @description:状态码
   */
  code: number | null | undefined;
  /**
   * @description:返回实体
   */
  data: T | null | undefined;
  /**
   * @description:返回列表
   */
  rows: Array<T> | null | undefined;
  /**
   * @description:数量
   */
  total: number | null | undefined;
  /**
  * @description:提示信息
  */
  msg: string | null | undefined;
  /**
   * @description:token
   */
  token: string | null | undefined;
}

/**
 * @description:后端返回验证码数据
 */
class ReturnResultImg {
  /**
  * @description:是否开启验证码
  */
  captchaOnOff: boolean | null | undefined;
  /**
   * @description:状态码
   */
  code: number | null | undefined;
  /**
  * @description:图片信息
  */
  img: string | null | undefined;
  /**
  * @description:提示信息
  */
  msg: string | null | undefined;
  /**
  * @description:uuid
  */
  uuid: string | null | undefined;
}

/**
 * @description:后端返回用户数据
 */
class ReturnResultUser {
  /**
 * @description:状态码
 */
  code: number | null | undefined;
  /**
  * @description:图片信息
  */
  img: string | null | undefined;
  /**
   * @description:权限信息
   */
  permissions: Array<string> | null | undefined;
  /**
   * @description:角色
   */
  roles: Array<string> | null | undefined;
  /**
   * @description:用户信息
   */
  user: object | null | undefined;
}

export {
  SysDictData, SysDept, SysRole, SysUser, SysPost,
  ReturnResult, ReturnResultImg, ReturnResultUser
};
