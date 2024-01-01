import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  // 네임스페이스 사용
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  // 키 이름이 값 이름과 비슷할 때는 JavaScript 축약어 규칙을 적용해서 하나의 이름으로 통합하여 사용하면 간편하다
  mutations,
  actions,
  getters,
};
