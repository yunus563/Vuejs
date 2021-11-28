<template>
  <div>
    <br />
    <br />
    <br />
    <h2>Create Your Posts</h2>
    <hr />
    <my-input 
    v-focus placeholder="Search title" 
    :model-value="searchTitle" 
    @update:model-value="setsearchTitle"
    />

    <div class="select_btn">
      <my-button
        style="background: dimgray; margin-right: 10px"
        @click="showDialog"
        >Create post</my-button
      >
      <my-select
       :model-value="selectSort" 
       @update:model-value="setselectSort"
       :options="selectOptions" 
       />
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
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";


export default {
  components: { PostForm, PostList },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setsearchTitle: 'post/setsearchTitle',
      setselectSort: 'post/setselectSort',
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      MoreFetchPosts: "post/MoreFetchPosts",
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      loading: state => state.post.loading,
      selectSort:state => state.post.selectSort,
      searchTitle: state => state.post.searchTitle,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPage:state => state.post.totalPage,
      selectOptions:state => state.post.selectOptions,
    }),
    ...mapGetters({
      sortPosts: 'post/sortPosts',
      sortAndSearch: 'post/sortAndSearch'
    })
  }
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
.observer {
  height: 30px;
  background: linear-gradient(rgb(58, 179, 226), rgb(58, 179, 226));
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>