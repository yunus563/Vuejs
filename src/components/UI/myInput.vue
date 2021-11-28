<template>
  <input 
    class="input" 
    type="text"
   :value="modelValue" 
   @input="InputCreate"
    /> 
</template>

<script>
  import InputMixin from '@/mixins/InputMixin';

  export default {
    name:'my-input',
       mixins: [InputMixin]
  }
  
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 8px 15px 15px;
  margin-top: 15px;
  width: 100%;
  display: block;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>