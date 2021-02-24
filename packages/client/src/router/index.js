import Vue from "vue";
import Post from "../views/Post.vue";
import Posts from "../views/Posts.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/post/:id",
    name: "Post",
    props: true,
    component: Post,
  },
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
