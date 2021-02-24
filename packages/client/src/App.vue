<template>
  <div id="app">
    <header id="nav">
      <router-link class="home-button" v-if="isHomeLinkVisible" to="/">
        All posts
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isHomeLinkVisible() {
      return this.$route.name !== "Posts";
    },
  },
};
</script>

<style>
:root {
  --prussian-blue: #003249;
  --powder-blue: #9ad1d4;
  --middle-blue: #80ced7;
  --light-gray: #ccdbdc;
  --cg-blue: #007ea7;
  --black: #2c3e50;
  --red: red;
}

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
}

#nav {
  padding: 1.2em;
  background-color: var(--middle-blue);
  box-shadow: 0 0 2px 0 var(--middle-blue);
}

.home-button {
  color: var(--prussian-blue);
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
}
</style>
