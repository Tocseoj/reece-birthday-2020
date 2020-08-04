<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <img
      class="birb"
      alt="great birb"
      title="great birb"
      src="@/assets/logo.png"
      @click="birdTalk = true"
    />
    <div v-if="birdTalk" class="bird-talk" @click="birdTalk = false">caw!</div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    birdTalk: false,
  }),
}
</script>

<style lang="stylus">
body
  background-color #222222
  color #abcdef
  margin 0

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

  width 100vw
  min-height 100vh
  overflow auto

  margin-bottom 200px

.birb
  position fixed
  right 0
  bottom 0
  z-index 1000
  max-width 200px
  max-height 200px

.bird-talk
  position fixed
  right 10px
  bottom 180px
  z-index 1001
  background-color white
  border-radius 5px
  color black
  padding 0.5em 0.75em
</style>
