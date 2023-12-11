const app = Vue.createApp({
  data() {
    return {
      calculatedNum: 0,
    };
  },
  watch: {
    result(value) {
      const that = this;
      // JS setTimeout의 this는 Vue의 this와 가리키는 것이 다르기 때문에 const that = this 해준다.
      setTimeout(function () {
        that.calculatedNum = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.calculatedNum < 37) {
        return "Not there yet";
      } else if (this.calculatedNum === 37) {
        return this.calculatedNum;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addNum(n) {
      this.calculatedNum = this.calculatedNum + n;
    },
  },
});

app.mount("#assignment");
