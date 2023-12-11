const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(n) {
      this.counter = this.counter + n;
    },
    reduce(n) {
      this.counter = this.counter - n;
    },
    setName(event, sirName) {
      console.log(event.target.value);
      this.name = sirName + " " + event.target.value;
    },
    submitForm(event) {
      alert("submit");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
