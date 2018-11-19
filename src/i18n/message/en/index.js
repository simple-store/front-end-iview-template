import GeneralModule from './general';

const obj = {
  general: GeneralModule,
};
// eslint-disable-next-line
export default Object.keys(obj).reduce((init, key) => {
  init[key] = obj[key];
  return init;
}, {});
