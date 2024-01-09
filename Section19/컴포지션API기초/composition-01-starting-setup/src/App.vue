<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<!-- <script setup>
import { ref } from 'vue';

const uName = ref('Maximilian');

setTimeout(function () {
  uName.value = 'Change Name';
}, 2000);
</script> -->

<script>
// import { ref } from 'vue';
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },

  // setup()은 한 번만 실행됨
  setup() {
    /**
     * ref는 setup()에서 호출 가능하고, 정의하는 값을 참조하여 템플릿에 사용할 수 있도록 만들어 준다
     * ref을 사용하여 값을 생성하면 해당 값은 반응형 값이 된다
     * ref은 객체를 생성한다
     * ref은 문자열,숫자,Boolean 등 어떤 값이든 관리 가능함
     * Vue는 ref을 감시하고 변화가 확인되면 이를 DOM에 반영한다
     */
    // const uName = ref('Maximilian');
    // const uAge = ref(31);

    /**
     * 객체를 만들어서 사용하는 것도 가능
     * ref으로 객체를 생성했기 때문에 값에 접근하려면 value를 사용해야 한다
     */

    /**
     * reactive 또한 ref과 동일하게 동작하지만
     * reactive는 객체만을 전달해야 한다
     * ref이 다양한 데이터 형태를 전달 가능한 것과는 다르다
     */
    // const user = reactive({
    //   name: 'Chan Gon',
    //   age: 31,
    //   firstName: '',
    //   lastName: '',
    // });

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(31);

    provide('userAge', uAge);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function (newValue, oldValue) {
      console.log('old = ' + oldValue[0]);
      console.log('new = ' + newValue[0]);
      console.log('old = ' + oldValue[1]);
      console.log('new = ' + newValue[1]);
    });

    /**
     * reactive 사용 시 value를 통해 값을 접근했던 ref과는 다르게
     * 바로 정의한 요소에 접근할 수 있음
     */
    // setTimeout(function() {
    //   user.name = 'Max',
    //   user.age = 22
    // }, 2000);

    function setNewAge() {
      uAge.value = 22;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    /**
     * ref 값을 템플릿에 전달하면 Vue는 자동으로 .value 프로퍼티를 확인한다
     * 따라서 userName.value 형식으로 값을 호출할 필요가 없다
     */
    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
