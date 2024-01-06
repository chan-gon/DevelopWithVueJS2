export default {
  coaches(state) {
    return state.coaches;
  },
  //   코치 데이터 존재 여부 확인
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  /**
   * _, _2는 린터(linter)를 의미함
   */
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    // 1분 이상 지났는지 확인
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
