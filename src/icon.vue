<template>
  <svg class="my-icon">
    <use :xlink:href="`#my-${icon}`" />
  </svg>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
    },
  }
};
</script>
<style lang="scss">
.my-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>