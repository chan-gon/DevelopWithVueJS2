<template>
  <!-- <button @click="addOne">(ChangeCounter.vue)Add 2</button> -->
  <button @click="test1">Add 2</button>
  <button @click="test2({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // commit('수행하고자 하는 mutations의 이름')
    // 저장소를 파고들어 일부 작업을 dispatch하는 일반적인 예시 코드
    // addOne() {
    //   this.$store.dispatch('increment');
    // },

    /**
     * mapActions 또한 mapGetters와 비슷한 목적으로 사용됨
     * methods 내부에서 호출함
     *
     * 스프레드 연산자를 통해 메서드 객체와 병합한 객체를 가져올 수 있도록 하면 좋다
     *
     * 배열을 인수로 받고, 메서드로 하고 싶은 액션의 이름을 명시한다
     */
    // ...mapActions(['increment', 'increase']),

    /**
     * methods의 함수 이름을 그대로 사용하고 싶지 않은 경우
     * 아래와 같이 사용할 수 있다
     *
     * mapGetters도 동일하게 구현 가능하다
     */
    ...mapActions('numbers', {
      test1: 'increment',
      test2: 'increase',
    }),
  },
};
</script>
