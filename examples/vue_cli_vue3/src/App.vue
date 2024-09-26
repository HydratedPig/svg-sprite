<script setup lang="ts">
import SvgSpriteContainer from '@svg-sprite/vue/runtime/SvgSpriteContainer'
import Left from './assets/sprite/left.svg?sprite=true'
import LeftStr from './assets/sprite/left.svg'
import Right from './assets/sprite/right.svg?sprite=true'
import Right2 from './assets/sprite/duplicate/right.svg?sprite=true'
import Right2Str from './assets/sprite/duplicate/right.svg'

console.log('leftSvg::', Left, 'rightSvg::', Right)
</script>

<template>
  <SvgSpriteContainer />
  <Left :size="24" />
  <Right />
  <Right2 />
  <div>
    Left: {{ LeftStr }} <br/>
    Right: {{ Right2Str }}
  </div>
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
