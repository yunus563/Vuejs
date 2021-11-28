<template>
  <select v-model="modelValue" @change="OptionChange">
    <option disabled value="">Take select</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    OptionChange(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  border-radius: 4px;
  width: 100px;
  height: 35px;
}
</style>