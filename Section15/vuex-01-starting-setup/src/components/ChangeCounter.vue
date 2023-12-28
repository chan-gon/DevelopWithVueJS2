<template>
  <button @click="addOne">(ChangeCounter.vue)Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
        // commit('수행하고자 하는 mutations의 이름')
        this.$store.dispatch('increment');
    },
  },
};
</script>
