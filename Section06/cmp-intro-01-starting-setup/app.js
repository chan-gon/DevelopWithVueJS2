const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "010 1234 5678",
          email: "manuel@email.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "010 4658 7584",
          email: "julie@email.com",
        },
      ],
    };
  },
});

/**
 * 컴포넌트는 기본적으로 html 요소이기 때문에 커스텀 html 태그를 정의해 주어야 한다.
    컴포넌트는 두 개의 인자가 들어가는데, 첫번째는 식별자, 두번째는 createApp에 전달한 것과 같은 구성 객체이다.
*/
// 식별자 이름은 항상 대시 기호를 포함한 두 단어로 작성하는데, html 요소와 충돌하는 일을 막기 위함이다.
app.component("friend-contact", {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "010 1234 5678",
        email: "manuel@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
