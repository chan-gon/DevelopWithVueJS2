import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';


const app = createApp(App);

/**
 * component 메서드로 컴포넌트를 등록하는 것은 일반적이지만 최선의 방법은 아님
 * component 메서드로 등록하면 전역(global) 컴포넌트로 등록되어 Vue앱 어느 곳에서나 사용 가능함
 * 
 * 일견 편리해 보이지만, 어플의 크기가 커져서 컴포넌트 숫자가 많아질수록 어플이 처음 시작될 때 Vue가 로드해야 하는 컴포넌트
 * 숫자가 많아진다는 의미이기 때문에 성능 측면에서 좋지 않다
 * 
 * 또한 컴포넌트 숫자가 많아질수록 어떤 컴포넌트가 어디에 사용되는지에 대한 유지보수 작업이 어렵다
 * 
 * 따라서 전역이 아닌 지역적으로 컴포넌트를 등록할 수 있다
 * 
 * 물론 필요에 따라 전역 컴포넌트 등록이 필요하기 때문에 용도에 맞게 잘 사용하면 된다
 */
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
