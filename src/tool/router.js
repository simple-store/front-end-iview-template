import { get, AUTHORIZATION_TOKEN_KEY } from '../storage';

export function go(name, params = undefined) {
  if (!name) throw new Error('Router go function must has a name parameter!');
  if (name.indexOf('/') !== -1) {
    if (params) {
      this.$nextTick(() => {
        this.$router.push({ path: name, params });
      });
      return;
    }
    this.$router.push({ path: name });
  } else {
    if (params) {
      this.$nextTick(() => {
        this.$router.push({ name, params });
      });
      return;
    }
    this.$router.push({ name });
  }
}
export function back(index = -1) {
  this.$router.go(index);
}

export function checkIfTokenExist(url, callback) {
  const token = get(AUTHORIZATION_TOKEN_KEY, window.sessionStorage, 'string');
  if (!token) {
    // redirect to login page if token is undefined
    window.location.href = url;
  } else {
    callback(token);
  }
}
