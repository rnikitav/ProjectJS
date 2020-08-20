<template>
  <section class="offer__main center">
    <a href="#">
      <div class="offer__main__left">
        <div class="offer__main__left__content">
          <h2>30%<span>OFFER</span></h2>
          <h2>FOR WOMEN</h2>
        </div>
      </div>
    </a>
    <article class="offer__main__right">
      <div class="offer__main__right__first">
        <img src="../../assets/img/Forma_11.png" alt="">
        <div class="offer__main__right__first__p">
          <p>Free Delivery</p>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
            models.</p>
        </div>
      </div>
      <div class="offer__main__right__first">
        <img src="../../assets/img/Forma_12.png" alt="">
        <div class="offer__main__right__first__p">
          <p>Free Delivery</p>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
            models.</p>
        </div>
      </div>
      <div class="offer__main__right__first">
        <img src="../../assets/img/Forma_13.png" alt="">
        <div class="offer__main__right__first__p">
          <p>Free Delivery</p>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
            models.</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'offerMain',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.offer__main
  margin-top: 113px
  display: flex
  flex-wrap: wrap
  margin-bottom: 77px

  & > a
    display: block


.offer__main__left
  min-height: 529px
  background: url(../../assets/img/Layer_382.png) no-repeat center, url(../../assets/img/Layer_39.png) no-repeat center

  &__video video
    width: 767px
    height: 529px
    outline: none


  &__content
    padding: 146px 429px 0 39px

  &__content h2:first-child
    color: #ffffff
    font-size: 54px
    font-weight: 700


  &__content h2:last-child
    color: #ffffff
    font-weight: 700
    font-size: 32px
    letter-spacing: 0.9px


  &__content span
    color: $colorAccentSite
    letter-spacing: 1.5px
    padding-left: 15px
.offer__main__right
  width: 373px
  min-height: 529px
  background-color: #222224
  display: flex
  flex-direction: column
  justify-content: space-evenly
  padding-left: 36px

  &__first
    display: flex

  &__first img
    width: 45px
    height: 32px

  &__first__p
    width: 219px
    min-height: 58px
    color: #fbfbfb
    margin-left: 30px

  &__first__p p:first-child
    font-size: 20px
    font-weight: 700
    margin-bottom: 13px

  &__first__p p:last-child
    font-size: 14px
    font-weight: 300
    line-height: 24px
</style>
