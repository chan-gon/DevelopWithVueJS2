import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    /**
     * coachesModule 구성 시 namespaced: true 설정을 명시했기 때문에
     * 어떤 네임스페이스를 사용 할 지 명시해야 함
     */
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
