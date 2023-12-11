const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  /*
  data 또는 computed에 정의된 이름을 watch의 메소드 이름으로 사용하면
  해당 값이 변경되면 watch에 정의된 동일 이름의 메소드가 실행된다.
  */
  watch: {
    counter(value) {
      if (value >= 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },

    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value;
    //   }
    // },
  },

  /*
  computed 프로퍼티는 Vue의 의존성을 인식하고
  의존성 중 하나가 변경된 경우에만 재실행함

  computed 프로퍼티에 정의된 메소드는 methods 프로퍼티에 정의된
  메소드처럼 동작하지 않음. 메소드지만 프로퍼티처럼 동작함.
  따라서 메소드 네이밍 또한 프로퍼티처럼 하는 것이 좋다.

  성능 면에서
  값을 출력하는 대부분의 경우 computed를 사용하는 것이 좋다.
  주의할 점은 v-bind,v-on으로 이벤트를 메서드에 바인딩할 때는
  methods를 사용한다. computed는 값 출력 용도로만 사용한다.

  페이지의 어떤 항목이 변경되어 값을 재개산하는 경우에만
  methods를 사용하는 것이 좋다.
  */
  computed: {
    fullname() {
      console.log("outputFullname..");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
    outputFullname() {
      console.log("outputFullname..");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kim";
    },
  },
});

app.mount("#events");
