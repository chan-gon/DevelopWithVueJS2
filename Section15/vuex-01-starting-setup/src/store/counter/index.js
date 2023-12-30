import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// 모듈로 저장소 구성하기
export default {
  /**
   * namespaced를 true로 설정하면 상태뿐만 아니라 모듈 전체가
   * 저장소로부터 분리되어야 한다는 것을 Vuex에게 알린다
   *
   * 하지만 이렇게 하면 모듈 저장소와 메인 저장소가 분리되어 기능이 제대로 동작하지 않는다
   */
  namespaced: true,

  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
