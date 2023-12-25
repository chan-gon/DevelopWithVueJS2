<template>
  <the-navigation></the-navigation>
  <main>
    <!-- <component :is="activePage"></component> -->
    <!--
      router-vew
      라우터 경로를 통해 요청하며 선택된 컴포넌트가 router-view 위치로 이동하라는 의미

      router [] 배열에 직접 등록 된 라우터 설정만 취급함
      nested router 설정에는 반응하지 않음
      -->
    <!-- 
        이름이 없는 router-view는 router의 components 설정에서 default로 설정된 설정을 따른다
       -->
    <router-view></router-view>
    <footer>
      <router-view name="footer"></router-view>
    </footer>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
