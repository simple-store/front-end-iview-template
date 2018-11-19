export default {
  login(state, obj) {
    const toStr = Object.prototype.toString;
    const type = toStr.call(obj).slice(8, -1);
    if (type === 'Object') {
      state.operator = obj.operator;
    } else if (type === 'String') {
      state.operator = obj;
    }
  },
};
