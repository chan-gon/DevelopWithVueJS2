<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() {
      // return '/teams/' + this.id;

      /**
       * main.js에서 중첩 라우터 name 속성으로 등록한 이름을 사용
       * 코드 자체는 return '/teams/' + this.id; 보다 길어졌지만
       * 가독성이 좋고 부모 라우터(편의상 이렇게 명명)의 path 변경에 일일이 수정 작업을 할 필요가 없다
       *
       * query: {} 쿼리 파라미터 설정
       */
      return {
        name: 'team-members',
        params: { teamId: this.id },
        query: { sort: 'asc' },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
