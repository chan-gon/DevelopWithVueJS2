<template>
    <h3>{{ counter }}</h3>
</template>

<script>
export default {
    computed: {
        counter() {
            /**
             * getter 사용 시 정의한 함수를 실행하는 것이 아닌 가리키는 것임
             * 따라서 finalCounter()가 아닌 finalCounter 형태로 사용한다
             * 
             * getters.finalCounter 호출 하면 finalCounter 메서드에 현재 state를 전달한다
             */
            return this.$store.getters.finalCounter;
        }
    }
}
</script>