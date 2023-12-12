const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredText: "",
      isShow: true,
    };
  },
  computed: {
    visibleBtnName() {
      return this.isShow ? "Hide" : "Show";
    },
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredText);
    },
    toggleListVisibility() {
      this.isShow = !this.isShow;
    },
  },
});
app.mount("#assignment");
