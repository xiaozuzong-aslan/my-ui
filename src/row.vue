<template>
  <div class="row">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
}
</style>