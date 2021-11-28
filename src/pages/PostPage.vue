<template>
  <div>
    <h2>Create Your Posts</h2>
    <my-input v-focus placeholder="Search title" v-model="searchTitle" />
    <div class="select_btn">
      <my-button
        style="background: dimgray; margin-right: 10px"
        @click="showDialog"
        >Create post</my-button
      >
      <my-select v-model="selectSort" :options="selectOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortAndSearch" @remove="removePost" v-if="!loading" />
    <div v-else><strong>Loading</strong>...</div>
    <div v-intersection="MoreFetchPosts" class="observer">Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";


export default {
  components: { PostForm, PostList },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      loading: false,
      selectSort: "",
      searchTitle: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      selectOptions: [
        { value: "title", name: "Filter title" },
        { value: "body", name: "Filter body" },
      ],
    };
  },
  methods: {
    createPost(posts) {
      this.posts.push(posts);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((id) => id.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.loading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
        this.loading = false;
      } catch (error) {
        alert(error);
      }
    },
     async MoreFetchPosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectSort]?.localeCompare(b[this.selectSort])
      );
    },
    sortAndSearch() {
      return this.sortPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    },
  },
};
</script>


<style>

.firs_btn {
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #00bcd4;
  color: black;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
}
.select_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page_wrapper {
  display: flex;
  margin: 15px;
}
.page_wrapper .page {
  border: 1px solid black;
  margin: 0 5px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  color: black;
}
.activePage {
  background-color: darkgray;
}
.observer{
  height: 30px;
  background:linear-gradient(rgb(58, 179, 226), rgb(58, 179, 226)); 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>