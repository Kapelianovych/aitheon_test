<template>
  <div class="user-avatar-card">
    <!-- 
        Supposed to be and image of the user.
        Here we can use userId for fetching info
        about post's owner (i.e. avatar).
       -->
    <div class="user-avatar"></div>
    <span class="user-name">User's name</span>
  </div>
</template>

<script>
export default {
  name: "UserAvatarCard",
  props: ["userId"],
};
</script>

<style scoped>
.user-avatar-card {
  margin: 0;
  padding: 0.5em;
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: var(--light-gray);
  margin-right: 1em;
}
</style>
