<template>
  <!-- <button :type="type" :class="mode"> -->
  <!-- 
      fallthrough에 의해 컴포넌트에서 type을 설정하면 루트 HTML 요소에 자동으로 전달되기 때문에
      굳이 :type="type"을 지정할 필요가 없다
  -->
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
