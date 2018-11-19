import Vue from 'vue';
import Router from 'vue-router';
import RouteList from './routes';

Vue.use(Router);

export default new Router({
  routes: [
    ...RouteList,
  ],
});
