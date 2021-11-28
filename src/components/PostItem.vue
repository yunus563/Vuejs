<template>
  <div class="post">
    <div>
      <div>ID:{{post.id}}</div>
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div><strong>Comments: </strong>{{ post.body }}</div>
    </div>
    <div style="display:flex; justify-content:flex-end">
      <div class="about">
      <button @click="$router.push(`/posts/${post.id}`)">About</button>
    </div>
    <div class="delete">
      <button @click="$emit('remove', post)">delete</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style  scoped>
.post {
  border: 2px solid teal;
  margin-top: 15px;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post .delete button{
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: rgb(212, 66, 66);
  color:white;
  font-size: 16px;
  cursor: pointer;
}

.post .about button{
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: rgb(212, 212, 212);
  color:rgb(54, 54, 54);
  font-size: 16px;
  cursor: pointer;
  margin-right: 4px;
}
</style>