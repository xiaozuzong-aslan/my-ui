<template>
  <button class="my-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <my-icon v-if="iconName && !loading" class="icon" :icon="iconName"></my-icon>
    <my-icon v-if="loading" class="loading icon" icon="loading"></my-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue";
export default {
  components: {
    "my-icon": Icon,
  },
  props: {
    iconName: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "right" || value === "left";
      },
    },
  },
};
</script>
<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.my-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  background: var(--button-bg);
  border-radius: var(--border-radius);
  color: var(--color);
  border: 1px solid var(--border-color);
  padding: 0 1em;
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: linen;
  }
  > .content {
    order: 2;
  }
  > .icon {
    margin-right: 0.3em;
    order: 1;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  > .loading {
    animation: spin 2s infinite linear;
  }
}
</style>