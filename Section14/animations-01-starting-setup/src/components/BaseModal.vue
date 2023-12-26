<template>
  <!-- 
    transition 컴포넌트는 하나의 직속 자식만을 허락한다
    그런데 BaseModal.vue 컴포넌트는 두 개의 루트(자식) 태그를 가지고 있기 때문에
    애니메이션이 동작하지 않음
    따라서 둘 중 하나를 주석 또는 제거해야 한다

    또는 BaseModal.vue 컴포넌트에 직접 transition 컴포넌트를 적용하면 된다
   -->
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>

  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

/* 모달 CSS 클래스 설정 */
.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  /* reverse: 애니메이션 역순으로 재생 */
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
