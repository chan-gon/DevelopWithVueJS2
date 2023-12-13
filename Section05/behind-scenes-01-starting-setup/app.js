const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

// testing for beforeUnmount() and unmounted()
// app.unmount();

// another Vue App
const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// Proxy of JS

const data = {
  message: "Hello",
  longMessage: "Hello World",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hellodfdfdfd";

// console.log(proxy.longMessage);

// Normal JS
// let message = "Hello!";
// let longMessage = message + " World";

// console.log(longMessage);

// /**
//  * message 변수값을 재할당 하더라도 JS에서 자동으로 longMessage 변수값을
//  * 수정하지 않는다. 왜냐하면 JS는 반응형이 아니기 때문이다.
//  */
// message = "Love";
// console.log(longMessage);
