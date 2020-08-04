<template>
  <div class="home">
    <HelloWorld msg="Happy Birthday Reece!" />
    <p>I got you some gifts for MTG: Arena</p>
    <CardFlip />
    <BoosterPack />
    <Freebies />
  </div>
</template>

<script>
export default {
  name: 'Home',
  path: '/',
}
</script>

<style lang="stylus">
.home
  margin auto
</style>
