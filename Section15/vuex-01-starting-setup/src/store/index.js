import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import counterModule from './counter/index.js';

const store = createStore({
  // 모듈 불러오기
  modules: {
    numbers: counterModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },
  //   mutations는 객체를 받고 객체에 메서드를 정의한다
  /**
   * 컴포넌트 내부에서 직접 상태를 변경하지 않고
   * mutations를 통해 이곳에서 변경하면 상태를 사용하는 다른 컴포넌트에서 변경 내용이 적용됨
   */
  mutations: rootMutations,

  // actions는 비동기 코드에서 중요함
  actions: rootActions,
  getters: rootGetters,
});

export default store;
