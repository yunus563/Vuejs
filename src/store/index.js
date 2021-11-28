import { createStore } from "vuex";
import {postModule} from './modulePosts'
export default createStore({
  modules: {
    post: postModule
  }
});
