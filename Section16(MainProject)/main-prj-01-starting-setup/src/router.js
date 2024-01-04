import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceive from './pages/requests/RequestsReceive.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      /**
       * 컴포넌트를 로드하는 라우터는 기본적으로 어떤 프로퍼티도 전달하지 않는다
       * 하지만 라우팅 구성에서 props: true 설정을 하면 해당 URL에 대한 구체적인 값인 동적 값을 확인하여
       * 이 동적인 값을 해당 컴포넌트에 이 이름을 가진 프로퍼티로 전달되게 할 수 있다
       *
       * /coaches/:id 라우터 설정에 props: true 설정을 했으므로
       * :id 값을 프로퍼티로 전달할 수 있다
       *
       */
      props: true,
      //   중첩 라우트 등록으로 /coaches/:id/contact 형태가 됨
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    // contact 양식을 통해 전송된 메시지를 확인하는 라우터
    { path: '/requests', component: RequestsReceive },
    // NOT FOUND 페이지
    { path: '/:noFound(.*)', component: NotFound },
  ],
});

export default router;
