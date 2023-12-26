import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// mount app once the router is fully setup
// 이렇게 하면 라우터 화면 전환 시 초기 애니메이션 뜨지 않음
router.isReady().then(function () {
  app.mount('#app');
});
