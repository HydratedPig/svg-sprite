<script setup>
import Left from './assets/sprite/left.svg'
import Right from './assets/sprite/right.svg'

console.log('leftSvg::', Left, 'rightSvg::', Right)
</script>

<template>
  <Left :size="24" />
  <Right />
</template>

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
