<template>
  <h2>Counter1</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquaredValue() }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
    <button @click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    getSquaredValue() {
      return this.counter * this.counter;
    },

    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
  },
};
</script>

<style>
button {
  background-color: #64bb87;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
  padding: 5px 15px;
  border: 1px solid white;
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>