<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // 메인 저장소에 modules로 불러온 counterModule 저장소의 key값인 numbers를 사용
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
