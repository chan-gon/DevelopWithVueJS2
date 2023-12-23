<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <!-- 
            computed 사용 대신 태그에 modelValue값을 바로 사용할 수도 있음
        -->
      <!-- <li :class="{ active: modelValue === 'poor' }"> -->
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // TheForm.vue에서 rating 프로퍼티 값을 받아옴
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },

  //   computed 속성 설정을 통해 TheForm.vue의 rating 값의 변화를 실시간 감지할 수 있음
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      //   this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
