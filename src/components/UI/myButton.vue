<template>
  <button class="button">
      <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
.button {
  padding: 8px 25px;
  color: white;
  background: rgb(44, 158, 53);
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  align-self: flex-end;
  margin-bottom: 15px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
}
</style>