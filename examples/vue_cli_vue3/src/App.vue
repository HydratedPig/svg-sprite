<template>
  <Left :size="24"/>
  <Right/>
</template>

<script>
import Left from './assets/left.svg'
import Right from './assets/right.svg'
console.log(Left, 'mmp', Right)
export default {
  name: 'App',
  components: {
    Left,
    Right
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
