<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      /**
       * TeamMembers.vue 컴포넌트를 호출한 라우터 URL에서 라우트 파라미터를 추출한다
       * /teams/:teamId 가 URL인 경우 teamId가 라우트 파라미터임
       * */
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  // created는 해당 컴포넌트가 실행되었을 때 동작함
  created() {
    // this.$route.path
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  // 해당 컴포넌트를 재사용 할 때마다 호출
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers Component');
    console.log(to, from);
    next();
  },
  watch: {
    // route는 항상 최신 라우터 정보를 담고 있고, route의 변화를 실시간으로 감지할 수 있도록 watch로 등록
    // route가 바뀔 때마다 watch(감시자)가 실행됨
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
