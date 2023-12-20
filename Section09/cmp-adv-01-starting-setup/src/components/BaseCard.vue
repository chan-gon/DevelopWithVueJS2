<template>
    <div>
        <!--
            $slots.header를 통해 해당 슬롯에 대한 데이터를 수신하는지 확인
            false인 경우 DOM에 header 슬롯을 렌더링하지 않음
        -->
        <header v-if="$slots.header">
            <slot name="header">
                <!-- 
                    UserInfo, BadgeList 컴포넌트에서 header 슬롯 내부 데이터를 정의했기 때문에
                    <h2>Default</h2> 내용은 표시되지 않음
                    만약 header 슬롯에 아무 내용도 정의하지 않았을 경우 <h2>Default</h2>이 표시됨

                    만약 <h2>Default</h2>조차 존재하지 않는 경우 아무 내용도 표시되지 않지만,
                    DOM에는 header 슬롯이 존재함. 이는 이상적이지 않음
                    따라서 v-if를 사용해서 undefined 슬롯을 표시하지 않도록 하는 것이 좋다
                 --> 
                <!-- <h2>Default</h2> -->
            </slot>
        </header>

        <!-- 
            Slot은 Vue 기능을 사용할 수도 있는 HTML 콘텐츠를 외부 컴포넌트로부터 수신할 수 있도록 한다
         -->
         <!-- 
            부모 컴포넌트에서 정의한 템플릿이 위치하는 곳을 <slot>으로 지정
          -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            // BadgeCard 컴포넌트는 UserInfo,BadgeList 두 군데서 사용되기 때문에 두 번 출력될 것임
            // console.log(this.$slots)
            
            // . 기호를 통해 설정한 슬롯 정보 확인 가능함
            // console.log(this.$slots.header)
        }
    }
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>