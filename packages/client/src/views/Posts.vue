<template>
  <main class="posts">
    <p v-if="loading" class="info">Posts are fetching, please wait a bit.</p>
    <p v-else-if="fail" class="error">
      Error is occured while fetching posts. Sorry, for inconvinience, we are
      working on it.
    </p>
    <div v-else class="posts-content">
      <post-card
        class="post-card"
        v-for="post in posts"
        :key="post.id"
        v-bind:card="post"
      />
    </div>
  </main>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import { FETCH_POSTS } from "@/store/action_types";

export default {
  name: "Home",
  components: {
    PostCard,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    fail() {
      return this.$store.state.fail;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  created() {
    if (!this.$store.getters.hasPosts) {
      this.fetchPosts();
    }
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch(FETCH_POSTS);
    },
  },
};
</script>

<style>
.info {
  color: var(--cg-blue);
  text-align: center;
}

.error {
  text-align: center;
  color: red;
  font-size: 1.1rem;
}

.posts-content {
  margin: 0 auto;
  padding: 0.5em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
}

@media screen and (min-width: 767px) {
  .posts-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1023px) {
  .posts-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1439px) {
  .posts-content {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
