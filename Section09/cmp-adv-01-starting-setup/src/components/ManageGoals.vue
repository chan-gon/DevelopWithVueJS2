<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <!-- 
        teleport는 Vue가 제공하는 내장 컴포넌트이며 
        아래 코드는 to 속성을 통해 컴포넌트 요소들을 렌더링 하고 DOM에 추가되어야 하는 실제 HTML 마크업을
        body 요소에서 직접 렌더링 하라고 명령한다
        이를 통해 error-alert 컴포넌트가 div 및 다른 요소에 깊게 중첩되는 것을 방지했다
        Sementically better
     -->
    <teleport to="body">
      <error-alert v-if="inputIsInalid">
        <h2>Input is invalid</h2>
        <p>아무거나 입력하세요</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInalid = true;
      }
    },
    confirmError() {
      this.inputIsInalid = false;
    },
  },
};
</script>
