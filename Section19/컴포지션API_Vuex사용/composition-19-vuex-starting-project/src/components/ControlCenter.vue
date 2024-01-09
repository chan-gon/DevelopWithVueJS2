<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    function inc() {
      // 옵션API에서는 this.$store.dispatch('increment')
      store.dispatch('increment');
    }

    return { inc };
  },
};
</script>
