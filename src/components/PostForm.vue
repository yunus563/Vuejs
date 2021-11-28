<template>
  <form @submit.prevent>
    <h3>Happy Vue</h3>
    <my-input
      v-focus
      v-model="post.title"
      type="text"
      placeholder="Usernmae"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Comments"
    />
    <my-button @click="createPost">Create</my-button>
  </form>
</template>

<script>

export default {

  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods:{
    createPost(){
      this.post.id = Date.now();
      if(this.post.title.length > 0 && this.post.body.length > 0){
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
      else{
        alert("Please fill in all fields");
      }
    }
  }
};
</script>

<style scoped>

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

</style>