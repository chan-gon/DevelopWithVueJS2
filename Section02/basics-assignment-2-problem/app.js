const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      enteredInput: "",
      enteredOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("show alert");
    },
    takeUserInput(event) {
      this.userInput = event.target.value;
    },
    setEnteredInput(event) {
      this.enteredInput = event.target.value;
    },
    confirmedInput() {
      this.enteredOutput = this.enteredInput;
    },
  },
});

app.mount("#assignment");
