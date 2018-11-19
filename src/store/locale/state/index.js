import { get, LOCALE_KEY } from '../../../storage';

export default {
  mounted: get(LOCALE_KEY, window.sessionStorage) || 'en',
};
