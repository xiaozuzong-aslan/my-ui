<template>
  <div class="col" :class="{[`col-${span}`]:span}">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: [String, Number],
      default: 24,
    },
    offset: {
      type: [String, Number],
      default: 1,
    },
  },
};
</script>
<style lang="scss" scoped>
.offset{
  
}
.col {
  border: 1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>