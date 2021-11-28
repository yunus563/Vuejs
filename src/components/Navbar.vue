<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="cursor:pointer">Vuejs 3 version</div>
    <div>
      <my-button @click="$router.push('/vuex')">Vuex</my-button>
      <my-button @click="$router.push('/posts')" >Posts</my-button>
      <my-button @click="$router.push('/about')" >About</my-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  h1 {
    color:black;
    text-align:center;
  }
  .navbar {
    background-color: #AAB7B8  ;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>



