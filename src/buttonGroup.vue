<template>
  <div class="boutton-group">
    <slot />
  </div>
</template>
<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      const name = node.nodeName.toLowerCase();
      name !== "button" &&
        console.warn(`ButtonGruop只能接受button,而你传入的是${name}`);
    }
  },
};
</script>
<style lang="scss">
.boutton-group {
  display: inline-flex;
  vertical-align: middle;
  :not(:first-child) {
    margin-left: -1px;
  }
  > .my-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
  :hover {
    z-index: 2;
  }
}
</style>