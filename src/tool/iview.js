/* eslint-disable */
export function info(params) {
  let str = this.$t('general.text.executeSuccessed');
  if (params) {
    str = params;
  }
  this.$Message.info(str);
}

export function success(params) {
  let str = this.$t('general.text.executeSuccessed');
  if (params) {
    str = params;
  }
  this.$Message.success(str);
}

export function error(params) {
  let str = this.$t('general.text.executeFailed');
  if (params) {
    str = params;
  }
  this.$Message.error(str);
}

export function warning(params) {
  let str = this.$t('general.text.executeSuccessed');
  if (params) {
    str = params;
  }
  this.$Message.warning(str);
}

function _ok() {
  success.call(this);
}
function _unok() {
  info.call(this, this.$t('general.text.executeCancel'));
}

export function deleteDialog(params) {
  const init = {
    okText: this.$t('general.btn.confirm'),
    cancelText: this.$t('general.btn.cancel'),
    title: this.$t('general.text.deleteConfirmation.title'),
    content: this.$t('general.text.deleteConfirmation.content'),
    unok: () => _unok.call(this),
    ok: () => _ok.apply(this),
  };
  // 把初始的对象和传过来的参数合并，参数覆盖初始值
  const data = {
    ...init,
    ...params,
  };
  const {
    ok,
    unok,
    ...rest
  } = data;
  this.$Modal.confirm({
    onOk: ok,
    onCancel: unok,
    ...rest,
  });
}
