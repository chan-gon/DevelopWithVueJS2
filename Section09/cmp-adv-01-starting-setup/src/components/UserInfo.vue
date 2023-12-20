<template>
  <section>
    <base-card>
    <!-- <template v-slot:header> -->
      <!-- v-slot은 # 기호로 대체 가능 -->
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template #default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- 스타일 태그에 scoped를 붙이면 CSS 설정은 해당 컴포넌트에서만 적용됨 -->
<style scoped>


</style>