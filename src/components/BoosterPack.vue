<template>
  <div
    class="booster-pack"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <h4>This is a Arena code for some Core 2021 boosters</h4>
    <div class="code">
      Arena Code: <br /><span class="emphasis">HdF-uodc-zxY</span>
    </div>
    <img
      src="@/assets/boosters.png"
      alt="core 2021 prerelease boosters"
      title="core 2021 prerelease boosters"
    />
  </div>
</template>

<script>
import backgroundUrl from '@/assets/boosters.png'

export default {
  data: () => ({
    backgroundUrl,
  }),
}
</script>

<style scoped lang="stylus">
.booster-pack
  margin 2rem auto
  background-size: cover
  max-width 1200px
  max-height 650px
  min-width 1200px
  min-height 650px

img
  width 100%
  opacity 0

.code
  position relative
  top 354px
  left 77px
  transform rotateZ(7deg)

.code .emphasis
  font-size: 1.5em;
  font-weight: bold;
</style>
