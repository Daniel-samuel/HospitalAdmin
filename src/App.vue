<template>
  <nav v-show="LoginPageShow">
    <router-link to="/signin">Sign in</router-link> |
    <router-link to="/dashboard">Admin Dashboard</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",

  computed: {
    LoginPageShow() {
      if (this.$route.path === "/" || this.$route.path === "/about") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
