export default {
  finalCounter(state) {
    return state.counter * 3;
  },

  /**
   * const finalCounter = state.counter * 3; 는 finalCounter에서 사용하는 코드를 중복 사용하기 때문에 비효율적임
   * 따라서 getters를 인자로 받아서 finalCounter 함수를 호출하는 방식으로 구현하는 것이 효율적임
   * 하지만 getters를 인자로 받으려면 두 번째 인수로 지정해야 하고, state 인수는 사용하지 않기 때문에 _ 기호를 통해
   * 첫 번째 인수를 사용하지 않는다는 것을 표현하면 됨
   */
  // normalizedCounter(state, getters) {
  normalizedCounter(_, getters) {
    // const finalCounter = state.counter * 3;
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
