<template>
  <div class="dialog" v-if="show" @click.stop="dialogVisible1">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>


<script>

  import ToggleMixin from '@/mixins/ToggleMixin';
  export default {
    name: 'my-dialog',
    mixins: [ToggleMixin]
  }
</script>

<style  scoped>
.dialog{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
}
.dialog__content{
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  min-height: 50px;
  min-width: 300px;
  margin: auto;
}
</style>