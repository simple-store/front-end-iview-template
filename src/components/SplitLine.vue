<template>
  <div :style="wrapperStyle" :class="classSet"></div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#d0d7de',
      validator: val => Object.prototype.toString.call(val) === '[object String]',
    },
    height: {
      type: [Number, String],
      default: 1,
      // eslint-disable-next-line
      // validator: obj => typeof obj=== 'number' && !isNaN(obj),
    },
    vstyle: {
      type: Object,
      default: () => ({}),
      validator: obj => Object.prototype.toString.call(obj) === '[object Object]',
    },
    vclass: {
      type: [Array, String, Object],
    },
  },
  data() {
    return {
      wrapperStyle: {},
      classSet: [],
    };
  },
  created() {
    // 从外部属性拿值赋值
    this.wrapperStyle.backgroundColor = this.color;
    this.wrapperStyle.height = `${parseInt(this.height, 10)}px`;
    // 从外部的style覆盖本身自带的style
    if (this.vstyle && Object.keys(this.vstyle) !== 0) {
      this.wrapperStyle = {
        ...this.wrapperStyle,
        ...this.vstyle,
      };
    }
    // 判断外部是否传入类名
    if (this.vclass) {
      const type = Object.prototype.toString.call(this.vclass).slice(8, -1);
      switch (type) {
        case 'Array':
          this.classSet = [...this.vclass];
          break;
        case 'String':
        case 'Object':
        default:
          this.classSet.push(this.vclass);
          break;
      }
    }
  },
};
</script>
<style lang="less" scoped>

</style>
