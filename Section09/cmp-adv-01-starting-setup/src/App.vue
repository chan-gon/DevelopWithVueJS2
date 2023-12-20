<template>
  <div>
    <!-- HTML 요소 이름에 대시(-)를 사용하면 self-closing 불가능 -->
    <the-header></the-header>

    <!-- HTML 요소 이름에 대시(-)를 사용하지 않으면 self-closing 가능함 -->
    <!-- <TheHeader /> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- 
      필요한 태그에 일일이 v-if 조건을 입력하는 것은 성가신 일이다
      vue에서는 동적 컴포넌트를 통해 좀 더 간편하게 구현할 수 있다

    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
     -->

    <!-- 
      component는 혼자서 동작하지 않고 is라는 프로퍼티가 필요한데, 정의한 컴포넌트 중 어떤 컴포넌트를 보여줄지 명시한다
      아래 코드에서는 selectedComponent 프로퍼티를 통해 컴포넌트 이름을 가져오는 방식으로 구현했다

      keep-alive 컴포넌트는 동적 컴포넌트의 한 부분이며 component와 함께 동작한다
      컴포넌트가 변경될 때 이전 컴포넌트를 완전히 제거하지 않고 상태를 내부에 캐시로 저장하여 Vue에 알려준다
      -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// 컴포넌트를 지역적으로 등록
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // 'the-header': TheHeader
    /**
     * HTML 요소 이름을 사용하는 이름과 동일하게 작성해도 되지만
     * 아래와 같이 TheHeader 이렇게 작성하면 Vue에서 the-header로 자동 번역 해준다
     * */
    // 'TheHeader': TheHeader

    /**
     * 모던 JS 구문에 의해 key:value 형태를 반드시 지키지 않아도 JS에서 자동으로 key:value 형태로 처리한다
     * TheHeader는 TheHeader:TheHeader 형태로 JS에서 자동으로 처리한다
     */
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
