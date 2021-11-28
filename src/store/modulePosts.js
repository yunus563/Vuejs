import axios from "axios";
export const postModule = {
  // Data=========
  state: () => ({
    posts: [],
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
  }),
  // Getters==========
  getters: {
    sortPosts(state) {
      return [...state.posts].sort((post1, post2) => post1[state.selectSort]?.localeCompare(post2[state.selectSort]))
    },
   
    sortAndSearch(state, getters) {
      return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchTitle.toLowerCase()))
    },

  },
  // Mutations========
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, posts) {
      state.loading = posts;
    },
    setselectSort(state, posts) {
      state.selectSort = posts;
    },
    setsearchTitle(state, posts) {
      state.searchTitle = posts;
    },
    settotalPage(state, posts) {
      state.totalPage = posts;
    },
    setPage(state, posts) {
      state.page = posts;
    },
  },
  // Actions=========
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "settotalPage",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    // More posts
    async MoreFetchPosts({ state, commit }) {
      try {
        commit("setPage", state.page+1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "settotalPage",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (error) {
        alert(error);
      }
    },
  },
  namespaced: true,
};
