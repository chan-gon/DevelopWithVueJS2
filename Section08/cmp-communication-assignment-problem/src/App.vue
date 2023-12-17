<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @save-data="saveData"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Kurt",
        age: "18",
      },
    };
  },
  methods: {
    saveData(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>
