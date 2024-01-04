import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true, // 경로를 기반으로 네임스페이스가 제정됨. requests/..
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
};
