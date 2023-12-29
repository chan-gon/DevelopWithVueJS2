<template>
  <!-- <h3>{{ counter }}</h3> -->
  <h3>{{ test }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  /**
   * getter 사용 시 정의한 함수를 실행하는 것이 아닌 가리키는 것임
   * 따라서 finalCounter()가 아닌 finalCounter 형태로 사용한다
   *
   * getters.finalCounter 호출 하면 finalCounter 메서드에 현재 state를 전달한다
   */
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },

    // ... 스프레드를 사용하면 computed 프로퍼티 내부로 객체를 spread 할 수 있다
    /**
     * mapGetters는 computed 프로퍼티에 병합되는 객체를 제공하며 자동으로 정의된다
     * 배열을 인수로 받는데, computed로 받아야 하는 모든 Getter의 이름을 넣으면 된다
     * 이렇게 하면 자동으로 명시된 인수와 동일한 이름의 Getter를 가리키에 된다
     *
     * mapGetters를 사용하면 return this.$store.getters.finalCounter 코드와 같이
     * 저장소를 불필요하게 타고 넘어가지 않아도 되고, 한 번에 여러 개를 지정할 수 있기 때문에 코드가 간결해진다
     */
    // ...mapGetters(['finalCounter']),

    /**
     * Getters에 정의된 함수 이름을 그대로 사용하고 싶지 않은 경우
     * 아래와 같이 구현할 수 있다
     */
    ...mapGetters({
      test: 'finalCounter',
    }),
  },
};
</script>
