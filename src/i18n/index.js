import VueI18n from 'vue-i18n';
import Vue from 'vue';
import messages from './message';
import { get, LOCALE_KEY } from '../storage';

Vue.use(VueI18n);

export default new VueI18n({
  locale: get(LOCALE_KEY, window.sessionStorage) || 'en',
  messages,
});
