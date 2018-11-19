export * from './keys';
// 存入值至localStorage
export const set = (key, data, storage = window.localStorage) => storage.setItem(key, JSON.stringify(data));
// 根据key拿值
export const get = (key, storage = window.localStorage) => JSON.parse(storage.getItem(key));
// 根据key删除值
export const remove = (key, storage = window.localStorage) => storage.removeItem(key);
// 清除所有的缓存
export const clear = (storage = window.localStorage) => storage.clear();
