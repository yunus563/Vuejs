<template>
  <div>
    <my-button @click="$router.push('/posts')">Back</my-button>
      <h1>About This Posts <span>ID: {{ $route.params.id }}</span></h1>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style >

</style>