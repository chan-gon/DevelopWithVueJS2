<template>
  <ul></ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          Link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          Link: 'https://google.org',
        },
      ],
    };
  },
};
</script>
