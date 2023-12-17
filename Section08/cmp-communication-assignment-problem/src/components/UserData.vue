<template>
  <form @submit.prevent="saveData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <button>Save</button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    saveData() {
      this.$emit("save-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
