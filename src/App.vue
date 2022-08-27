<template>
  <NavBar />
  <div class="container lg:mx-auto">
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/layouts/NavBar";

export default {
  name: "APP",
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  background-image: url("@/assets/background_image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
