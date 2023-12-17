<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <!-- 
      When binding to an event, you can either point at a method, execute a method or
      execute any other basic JS code
     -->
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  /**
   * Vue는 단방향 데이터 흐름(Unidirectional Data Flow)을 기반으로 동작한다
   * 부모가 보낸 데이터 값은 부모 쪽에서만 수정 가능하고 자식 쪽에서는 해당 값을 받기만 해야 한다
   * 일반적으로 그렇다는 것이고, 이를 거스르는 방법이 있기는 있음
   */

  /**
   * props 요소 이름에 대시를 사용하면 유효하지 않은 JS 프로퍼티 이름이 되어 에러 발생함
   * 따라서 컴포넌트의 프로퍼티는 카멜케이스로 정의해야 한다
   * Vue에서 카멜케이스로 정의된 프로퍼티를 해석하여 대시가 있는 케밥케이스로 변환한다
   * ex) phoneNumber = phone-number
   */
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // FriendContact 컴포넌트에 어떤 시점에 발생하는 이러한 이벤트가 있다는 것을 명시함
  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // 컴포넌트에서 부모 쪽으로 통신하는 방법: $emit('호출 메서드 이름', '전달 인수', ...)
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
