<script setup>
import SvgSpriteContainer from '@svg-sprite/vue/runtime/SvgSpriteContainer'
import Left from './assets/sprite/left.svg'
import Right from './assets/sprite/right.svg'
import Right2 from './assets/sprite/duplicate/right.svg'

console.log('leftSvg::', Left, 'rightSvg::', Right)
</script>

<template>
  <SvgSpriteContainer />
  <Left :size="24" />
  <Right />
  <Right2 />
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
