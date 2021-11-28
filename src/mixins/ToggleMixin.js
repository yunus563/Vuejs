export default {
  props: {
    show: {
      type:Boolean,
      default:false
    }
  },
  methods: {
    dialogVisible1(){
      this.$emit('update:show', false)
    }
  },
}