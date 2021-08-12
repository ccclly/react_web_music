import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, error => {

});

instance.interceptors.response.use(res => {
  return res.data;
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        console.log('请求错误');
        break;
      case 401:
        console.log('请求未授权');
        break;
      case 404:
        console.log('请求没有找到');
        break;
      default:
        console.log('未知错误');
    }
    return error;
  }
});

export default instance;