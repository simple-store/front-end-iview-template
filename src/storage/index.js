export * from './keys';
// 存入值至localStorage
export const set = (key, data, storage = window.localStorage) => storage.setItem(key, JSON.stringify(data));
// 根据key拿值
export const get = (key, storage = window.localStorage, type = 'json') => {
  const _val = storage.getItem(key);
  // if type is not a json, return the original value
  if (type !== 'json') {
    return _val;
  }
  try {
    // parse the val
    const val = JSON.parse(_val);
    return val;
  } catch (e) {
    console.log(`Ocurred error when parse ${key},`, e);
    // if occured eroor, return the original value
    return _val;
  }
};
// 根据key删除值
export const remove = (key, storage = window.localStorage) => storage.removeItem(key);
// 清除所有的缓存
export const clear = (storage = window.localStorage) => storage.clear();
