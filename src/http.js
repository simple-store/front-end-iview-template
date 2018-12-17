import axios from 'axios';
import Vue from 'vue';
import { checkIfTokenExist } from './tool';

// set the base url of each request
axios.defaults.baseURL = 'http://localhost:1200';

// set time out
axios.defaults.timeout = 100000;
// 标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// request interceptor
axios.interceptors.request.use(config => {
  config.withCredentials = true; // allow to take token, fix the cros problem
  checkIfTokenExist(Vue.prototype.GLOBAL.loginUrl, (token) => {
    config.headers = {
      // eslint-disable-next-line
      'Authorization': token,
    };
  });
  return config;
});

// response intercepor
// check the code, true => return data, error => trigger error
axios.interceptors.response.use((response) => {
  if (response.data.statusCode === 0 || response.data.code === '200') {
    return response.data.data || response.data.message;
  }
  throw new Error(response.data.msg || '服务异常 at: http.js');
});

export default axios;
