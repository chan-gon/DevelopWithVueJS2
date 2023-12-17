<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // can only inject from the higher levels
  // inject 사용하는 컴포넌트의 부모 또는 조상 컴포넌트에서만 inject 사용 가능
  inject: ['topics'],
};
</script>
