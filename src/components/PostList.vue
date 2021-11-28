<template>
  <div v-if="posts.length > 0">
    <h3>User posts</h3>
    <post-item 
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)" 
      />
  </div>
  <div v-else>
    <h3 style="color: red">No Users</h3>
    <p>No users found</p>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>