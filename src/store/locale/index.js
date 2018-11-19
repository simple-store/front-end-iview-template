import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state,
  // 暴露给外部显示的一些状态
  getters,
  // 暴露给外部使用的方法
  actions,
  // 真正对数据进行操作的地方
  mutations,
};
