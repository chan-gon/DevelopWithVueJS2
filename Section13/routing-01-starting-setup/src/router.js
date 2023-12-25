import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 모든 객체는 하나의 라우트에 해당하며 라우트에 대한 구성이 있어야 한다
    // 라우터 설정은 위에서 아래로 이동하기 때문에 라우터 우선 순위 설정이 중요함

    /**
     * redirect는 실제 URL이 변경됨
     * alias는 URL 변경 안됨
     */
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        /**
         * props:true
         * vue 라우터에 동적 매개변수가 $route 프로퍼티만 전달되는 것이 아니라
         * 프로퍼티로서 컴포넌트에 전달되어야 한다고 알려주는 기능을 한다
         */
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },

    // 상위 라우터 설정을 만족하지 않는 경우 아래 라우터 설정으로 이동
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
  }
  // next 호출은 페이지 이동을 승인한다는 의미
  // next(true or false)
  next();
});

/**
 * afterEach 가드는 서버에 분석 데이터를 보내는 데에 유용함
 * 이동 액션이나 사용자 페이지 변경을 로그로 남기는 등
 * 사용자가 화면에 볼 내용 등은 제어할 수 없고 사용 기록을 서버로 넘기는 정도만 가능
 */
router.afterEach(function (to, from) {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
