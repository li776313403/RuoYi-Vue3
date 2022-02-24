/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:04:28
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 11:06:25
 */
import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

function getToken(): string | undefined {
  return Cookies.get(TokenKey);
}

function setToken(token: string | object): string | undefined {
  return Cookies.set(TokenKey, token);
}

function removeToken(): void {
  return Cookies.remove(TokenKey);
}

export { getToken, setToken, removeToken };
