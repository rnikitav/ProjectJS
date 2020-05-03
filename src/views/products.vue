<template>
   <div class="products">
     <newArria></newArria>
     <main class="main-product center">
       <prodLeft></prodLeft>
       <prodRight></prodRight>
     </main>
     <freeDel></freeDel>
   </div>
</template>

<script>
import newArria from '../components/newArria.vue';
import prodLeft from '../components/products/prodLeft.vue';
import prodRight from '../components/products/prodRight.vue';
import freeDel from '../components/products/freeDel.vue';

export default {
  name: 'products',
  components: {
    newArria,
    prodLeft,
    prodRight,
    freeDel,
  },
};
</script>


<style lang="sass">
$colorAccentSite: #f16d7f
.main-product
  display: flex
  justify-content: space-between
  /*min-height: 1011px*/
  margin-top: 71px
.product-main-left-top > div:first-child
  max-width: 176px
  margin-right: 90px


.product-main-left-top > div:last-child > form > input
  width: 262px


.product-main-left-top
  display: flex
  justify-content: space-between
  width: 846px
  color: #6f6e6e
  font-size: 14px
  font-weight: 400
  line-height: 26px


.product-main-left-top h3
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  margin-bottom: 10px


.product-main-left-top span
  padding: 0 6px


.product-main-left-top label
  display: inline-block
  width: 62px


.product-main-left-top > div:nth-child(2)
  max-width: 271px


.product-main-left-top > div:nth-child(2) input
  width: 30px


.product-main-left-second
  max-width: 846px
  height: 50px
  background-color: #f3f3f3
  margin-top: 41px
  margin-bottom: 48px
  color: #6f6e6e
  font-size: 14px
  font-weight: 400


.product-sortby
  display: flex
  height: inherit
  align-items: center


.first-sortby
  display: flex
  height: 30px
  align-items: center
  margin: 0 10px


.product-sortby p
  display: block
  padding: 6px 8px 5px 10px
  border: 1px solid #ebebeb
  background: #ffffff
  margin-right: -1px


.first-sortby input
  height: 30px
  width: 86px
  padding-left: 10px
  padding-top: 2px
  border: 1px solid #ebebeb
  font-size: 14px
  outline: none


.second-sortby
  display: flex
  align-items: center
  position: relative


.second-sortby summary
  display: block
  width: 63px
  height: 30px
  padding: 9px 18px 9px 12px
  line-height: 13px
  border: 1px solid #ebebeb
  background: #ffffff
  outline: none


.second-sortby details
  position: absolute
  top: 0
  left: 52px
  z-index: 10


.second-sortby ul
  list-style: none
  padding-left: 13px


.second-sortby a
  color: #6f6e6e


.second-sortby a:hover
  color: $colorAccentSite


.second-sortby summary::after
  content: '\25BC'
  padding-left: 18px
  color: #6f6e6e
  font-size: 10px


.second-sortby summary::-webkit-details-marker
  display: none


.product__box__catalog
  width: 846px
  margin-bottom: 0


.main__bottom
  display: flex
  justify-content: space-between
  margin: 23px 0


.main__links__btm a
  display: inline-block
  margin-right: 15px
  color: #c4c4c4
  font-size: 16px
  font-weight: bold
  line-height: 26px


.main__links__btm a:last-of-type
  color: $colorAccentSite


.main__links__btm a:hover
  color: $colorAccentSite


.main__link__active
  color: $colorAccentSite !important


.main__bottom a:first-of-type
  margin-left: 15px


.main__links__btm
  height: 44px
  text-align: center
  line-height: 44px
  border-radius: 3px
  border: 1px solid #ebebeb
  background-color: #ffffff


.view-all
  width: 150px
  height: 44px
  text-align: center
  line-height: 44px
  border-radius: 3px
  border: 1px solid #ef5b70
  background-color: #ffffff
  color: #ef5b70
  font-size: 16px
  font-weight: bold
  transition: all 1s


.view-all:hover
  color: #ffffff
  transform: rotate(360deg)
  background-color: $colorAccentSite


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
