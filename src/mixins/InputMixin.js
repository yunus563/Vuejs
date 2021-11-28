export default {
  props: {
    modelValue :[String, Number],
  },
  methods:{
    InputCreate(e){
      this.$emit('update:modelValue', e.target.value)
    }
  }
}