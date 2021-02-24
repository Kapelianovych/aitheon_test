<template>
  <div class="card">
    <header class="card-header">
      <user-avatar-card :userId="card.userId" />
    </header>
    <div class="card-body">
      <h4 class="post-title">{{ card.title }}</h4>
      <p class="post-content">{{ card.body }}</p>
    </div>
    <footer class="card-footer">
      <router-link class="more-link" :to="'/post/' + card.id">
        Further reading
      </router-link>
    </footer>
  </div>
</template>

<script>
import UserAvatarCard from "./UserAvatarCard";

export default {
  name: "PostCard",
  props: ["card"],
  components: {
    UserAvatarCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border-radius: 4px;
  box-shadow: 0 0 2px 0 var(--light-gray);
  padding: 1em;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1;
}

.post-title {
  margin: 0.5em;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
}

.post-content {
  margin: 0.5em;
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.card-footer {
  text-align: right;
}
</style>
