<template>
  <!-- 
        transition-group을 사용하면 여러 요소에 동시에 애니메이션 적용 가능
        tag 요소를 통해 렌더링될 요소를 제어할 수 있음
     -->
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manuel', 'Julie', 'Leonardo'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-move {
    transition: transform 0.8s ease;
}
</style>
