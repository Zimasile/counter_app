<template>
  <div class="container bg-secondary">
    <div class="row">
      <div class="col">
        <form class="form">
          <div>
            <input type="text" placeholder="0" readonly :value="counter">
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-success" @click.prevent="increase">Increase</button>
            </div>
            <div class="col">
              <button class="btn btn-success" @click.prevent="decrease">Decrease</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    increase() {
      this.$store.dispatch('increaseCounter')
    },
    decrease() {
      this.$store.dispatch('decreaseCounter')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
