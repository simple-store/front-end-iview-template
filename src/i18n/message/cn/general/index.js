import BtnModule from './btn';
import TextModule from './text';

const obj = {
  btn: BtnModule,
  text: TextModule,
};
// eslint-disable-next-line
export default Object.keys(obj).reduce((init, key) => {
  init[key] = obj[key];
  return init;
}, {});
