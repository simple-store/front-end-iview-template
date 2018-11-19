export default {
  change(state, obj) {
    const toStr = Object.prototype.toString;
    const type = toStr.call(obj).slice(8, -1);
    let val;
    if (type === 'Object') {
      val = obj.language;
    } else if (type === 'String') {
      val = obj;
    }
    state.mounted = val;
  },
};
