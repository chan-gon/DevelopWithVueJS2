<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      /**
       * $router.push는 페이지 이동 후 이전 페이지로 이동 가능함
       * $router.replace는 페이지 이동 후 이전 페이지 이동 불가능
       */
      // this.$router.push('/coaches');
      this.$router.replace('/coaches');
    },
  },
};
</script>
