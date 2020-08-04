<template>
  <div class="card-flip">
    <h4>This is a Arena code for the Tattoo card sleeves</h4>
    <div
      @click="flipCard"
      :class="cardClass"
      :style="{ backgroundImage: `url(${cardImage})` }"
    >
      <div class="code" @click.stop>
        Arena Code: <br /><span class="emphasis">GbT-gBbW-iwQ</span>
      </div>
      <img
        :src="cardImage"
        alt="secret lair tattoo card sleeve"
        title="secret lair tattoo card sleeve"
      />
    </div>
    <div class="help-text">*click to flip card*</div>
  </div>
</template>

<script>
const imgBack = require('@/assets/sleeve.png')
const imgFront = require('@/assets/card.png')

export default {
  data: () => ({
    cardImage: imgBack,
    cardClass: 'card card-back',
    cardFront: false,
  }),
  methods: {
    flipCard() {
      this.cardFront = !this.cardFront
      this.cardClass = this.cardFront ? 'card card-front' : 'card card-back'
      setTimeout(
        () => (this.cardImage = this.cardFront ? imgFront : imgBack),
        250
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-flip
  margin 2rem 0

.card
  margin 0 auto
  max-width 350px
  min-width 350px
  min-height 489px
  width 100%
  background-size: cover
  transition: transform 1s;
  transform-style: preserve-3d;

.card-front
  transform: rotateY(180deg);
  // backface-visibility: hidden;

.card-back
  transform: rotateY(0deg);
  // backface-visibility: hidden;

img
  max-width 350px
  width 100%
  opacity 0

.code
  position relative
  top 254px
  left 0
  color: #000000
  transform translateZ(-1px) rotateY(180deg)
  backface-visibility: hidden;

.code .emphasis
  font-size: 1.5em;
  font-weight: bold;

.help-text
  font-style italic
  margin-top 1em
</style>
