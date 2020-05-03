<template>
  <section class="promo bg-pan-bl center">
    <div class="promo__content">
      <h2 class="promo__h2">THE BRAND</h2>
      <h3 class="promo__h3">OF LUXERIOUS <span class="promo__color">FASHION</span></h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'promo',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.promo
  height: 613px
  background-color: #e8e8e8
  background-image: url(../../assets/img/promo.jpg)
  background-repeat: no-repeat
  background-position: center -51px
  display: flex
  align-items: center
  &__h2
    font-size: 60px
    font-weight: 900
    color: #222222
    letter-spacing: 0.03em
    line-height: 45px
    margin-bottom: 15px
  &__h3
    font-size: 40px
    font-weight: 900
    color: #222222
    letter-spacing: 0.03em
    line-height: 31px
  &__color
    font-size: 40px
    font-weight: 900
    color: $colorAccentSite
    text-align: right
    letter-spacing: 0.03em
  &__content
    border-left: 12px solid $colorAccentSite
    padding-left: 12px
</style>
