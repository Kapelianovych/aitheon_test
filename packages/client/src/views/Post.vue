<template>
  <main>
    <p v-if="notFound" class="not-found-post">
      <span>
        Post with id: <strong>{{ id }}</strong> is not found. Try refresh post's
        list or reach different post.
      </span>
      <button @click="refreshPosts">Refresh</button>
    </p>
    <div v-else class="post">
      <h1 class="title">{{ post.title }}</h1>
      <div class="credentials">
        <user-avatar-card :userId="post.userId" />
        <span>{{ new Date().toLocaleDateString() }}</span>
      </div>
      <div class="content">{{ post.body }}</div>
    </div>
  </main>
</template>

<script>
import { FETCH_POSTS } from "@/store/action_types";
import UserAvatarCard from "@/components/UserAvatarCard";

export default {
  name: "Post",
  props: ["id"],
  components: { UserAvatarCard },
  computed: {
    post() {
      return this.$store.getters.getPost(parseInt(this.id));
    },
    notFound() {
      return this.post === undefined;
    },
  },
  methods: {
    refreshPosts() {
      this.$store.dispatch(FETCH_POSTS);
    },
  },
};
</script>

<style scoped>
.not-found-post {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found-post button {
  display: inline-block;
  margin-top: 1em;
  background: var(--powder-blue);
  color: var(--prussian-blue);
  border-radius: 4px;
  font-size: 1.1rem;
  border: none;
  padding: 0.4em 0.8em;
  cursor: pointer;
}

.post {
  padding: 0.5em;
}

.credentials {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.7rem;
}

.content {
  text-align: justify;
}
</style>
