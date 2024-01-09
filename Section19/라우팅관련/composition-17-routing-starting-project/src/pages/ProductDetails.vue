<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  // setup(props) {
  setup() {
    const products = inject('products');

    /**
     * 반응형이기 때문에 감시하거나 computed 프로퍼티 사용하여 라우트가 변경될 때
     * 여기에 의존하는 데이터를 업데이트할 수 있습니다
     */
    const route = useRoute();
    console.log(route);

    const selectedProduct = computed(() =>
      // products.value.find((product) => product.id === props.pid)
      products.value.find((product) => product.id === route.params.pid)
    );
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
