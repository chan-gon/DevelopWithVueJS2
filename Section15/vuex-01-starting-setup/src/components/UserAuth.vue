<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    // 방법1. 전통적인 접근 방법
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    // 방법2. mapGetters
    // ...mapGetters({
    //   isLoggedIn: 'userIsAuthenticated',
    // }),
  },
};
</script>
