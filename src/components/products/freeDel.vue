<template>
  <article class="freedelivery__product center">
    <div class="freedelivery__block">
      <img src="../../assets/img/Forma_11.png" alt="">
      <div class="freedelivery__p">
        <p>Free Delivery</p>
        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </div>
    </div>
    <div class="freedelivery__block">
      <img src="../../assets/img/Forma_11.png" alt="">
      <div class="freedelivery__p">
        <p>Free Delivery</p>
        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </div>
    </div>
    <div class="freedelivery__block">
      <img src="../../assets/img/Forma_11.png" alt="">
      <div class="freedelivery__p">
        <p>Free Delivery</p>
        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'freeDel',
};
</script>

<style lang="sass">
.freedelivery__product
  height: 341px
  display: flex
  background-color: #222224
  justify-content: space-between
  align-items: center
  margin-top: 87px


.freedelivery__block
  display: flex
  flex-direction: column
  align-items: center


.freedelivery__block > img
  display: block
  width: 45px
  height: 32px
  margin-bottom: 32px


.freedelivery__p
  width: 311px
  text-align: center
  color: #fbfbfb


.freedelivery__p p:first-of-type
  font-size: 20px
  font-weight: 700
  letter-spacing: 0.5px
  margin-bottom: 14px


.freedelivery__p p:last-of-type
  font-size: 14px
  font-weight: 300
  line-height: 23.95px
  letter-spacing: 0.35px


.order__form__new__left
  position: relative
</style>
