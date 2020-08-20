<template>
  <div class="slider-item hidden-slide animated"
       :class="{active: curInd === imgIndex,
                bounceInRight: slideRight && curInd === imgIndex,
                bounceInLeft: slideLeft && curInd === imgIndex}">
    <img class="img_carousel"
         :src="require(`@/assets/img/${imag}`)" :alt="name">
  </div>
</template>

<script>
export default {
  name: 'imageProduct',
  props: ['imag', 'name', 'imgIndex', 'curInd', 'slideRight', 'slideLeft'],
};
</script>

<style lang="sass">
.slider
  width: 597px
  height: 724px
  margin: 0 auto
  position: relative
  overflow: hidden
.img_carousel
  width: 100%
  height: 100%
.hidden-slide
  visibility: hidden
.slider-item
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  z-index: 1
.active
  visibility: inherit
</style>
