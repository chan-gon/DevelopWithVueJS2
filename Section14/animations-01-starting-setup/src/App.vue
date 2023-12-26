<template>
  <!-- 라우트 전환 시 사용하는 구문 -->
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- 라우트 전환 시 사용하는 구문 -->
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    // 전환 이벤트
    enterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter()');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          /**
           * done() 함수가 인수로서 호출되어야
           * enter 훅이 끝낸 후 afterEnter 훅이 실행됨
           * done() 함수가 없으면 enter 훅이 언제 끝나는지 알 수 없어서 afterEnter 훅이 마음대로 실행됨
           * */
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },

    beforeLeave(el) {
      console.log('beforeLeave()');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },

    // 전환 이벤트

    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUser() {
      this.usersAreVisible = true;
    },
    hideUser() {
      this.usersAreVisible = false;
    },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* animate 클래스에 애니메이션 효과 적용 */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* 시작 애니메이션 */
.v-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}
/* 중간 애니메이션 / 시작,마지막 애니메이션 지속 시간 설정 */
.v-enter-active {
  animation: slide-scale 0.3s ease-out;
}
/* 마지막 애니메이션 */
.v-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.v-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}
.v-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}
.v-leave-to {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-from {
}
.route-enter-active {
  animation: slide-scale 0.4s ease;
}
.route-enter-to {
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
