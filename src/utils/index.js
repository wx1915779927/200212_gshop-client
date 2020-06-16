import {
  v4 as uuidv4
} from "uuid";
//得到临时Id
export function getUserTempId() {
  let userTempId = localStorage.getItem("USER_TEMP_ID_KEY");
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
  }
  return userTempId;
}
//保存用户信息到local
export function saveUserInfo(userInfo) {
  window.localStorage.setItem('USER_INFO_KEY', JSON.stringify(userInfo))
}
//读取local保存的用户信息
export function getUserInfo() {
  return JSON.parse(window.localStorage.getItem('USER_INFO_KEY')) || {}
}
// 删除local中的用户信息
export function removeUserInfo(userInfo) {
  window.localStorage.removeItem('USER_INFO_KEY')
}