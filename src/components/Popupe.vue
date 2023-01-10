<template>
  <div class="popup">
    <div class="popup-inner">
      <button class="popup-close" @click="TogglePopup()">x</button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  position: relative;
  background: #fff;
  padding: 32px;
}
.popup-close {
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
