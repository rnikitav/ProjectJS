<template>
  <div>
    <newArria></newArria>
    <mainCart></mainCart>
  </div>
</template>

<script>
import newArria from '../components/newArria.vue';
import mainCart from '../components/Cart/mainCart.vue';

export default {
  name: 'shoppingcart',
  components: {
    newArria,
    mainCart,
  },
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
=placeholderShipping($color)
  &::-webkit-input-placeholder
    color: $color,
  ::-moz-placeholder
    color: $color,
  ::-ms-input-placeholder
    color: $color,
.product__details

  &__top
    display: flex
    padding-bottom: 20px
    padding-top: 90px
    border-bottom: 1px solid #eaeaea
    color: #222222
    font-size: 13px
    font-weight: 700
    text-transform: uppercase
    &__left
      display: flex
      flex-basis:  527px
    &__right
      display: flex
      align-items: center
      flex-grow: 1
      justify-content: space-between
  &__middle
    margin-bottom: 44px
    &__one__item
      display: flex
      align-items: center
      padding: 25px 0
      border-bottom: 1px solid #eaeaea
      &__left
        margin-left: 21px
        flex-basis: 433px
        & > a > h3
          color: #222222
          font-size: 13px
          font-weight: 400
          text-transform: uppercase
          padding-bottom: 38px
        & > p
          color: #575757
          font-weight: 400
          font-size: 13px
          margin-right: 13px
          line-height: 20px
        & span
          font-weight: 300
          padding-left: 5px
      &__right
        display: flex
        align-items: center
        flex-grow: 1
        & > p
          color: #656565
          text-align: center
          font-size: 13px
          font-weight: 400
          line-height: 20px
        & p:first-of-type
          padding-right: 100px
        & p:nth-last-of-type(2)
          margin-right: 84px
        & > a
          margin-left: 111px
          color: #c0c0c0
        & > a:hover
          color: $colorAccentSite
        & > input
          width: 54px
          height: 30px
          text-align: center
          margin-right: 91px
  @at-root
    .product__details__buttons
      display: flex
      align-items: center
      justify-content: space-between
      font-size: 14px
      font-weight: 700
      text-transform: uppercase
      margin-bottom: 60px
      & > a
        display: block
        padding: 19px 39px
        color: #4a4a4a
        border: 1px solid #eaeaea
        transition: all 0.4s
        &:hover
          background: $colorAccentSite
  &__bottom
    display: flex
    margin-bottom: 80px
    & input
      width: 355px
      height: 45px
      padding-left: 18px
      margin-bottom: 20px
      border: 1px solid #eaeaea
      +placeholderShipping(#b1b1b1)
    & form
      display: flex
      flex-direction: column
    & h3
      color: #222222
      font-size: 16px
      font-weight: 700
      text-transform: uppercase
    & > div:first-of-type > form
      margin: 22px 36px 0 0
      & > a
        display: block
        width: fit-content
        padding: 12px 15px
        border: 1px solid #eaeaea
        text-align: center
        color: #4a4a4a
        font-size: 11px
        font-weight: 700
        text-transform: uppercase
        transition: all 0.4s
        &:hover
          background: $colorAccentSite
    & > div:nth-last-of-type(2)
      width: 355px
      margin-right: 36px
      & > p
        color: #000000
        margin: 24px 0
        font-size: 14px
        font-weight: 300
      &  a
        display: block
        width: fit-content
        padding: 13px 18px
        text-align: center
        border: 1px solid #eaeaea
        color: #4a4a4a
        font-size: 11px
        font-weight: 700
        text-transform: uppercase
        transition: all 0.4s
        &:hover
          background: $colorAccentSite
    & > div:last-of-type
      width: 360px
      height: 214px
      background-color: #f5f3f3
  @at-root
    .proceedtocheckout__box
      width: 273px
      margin: 0 auto
      text-align: right
      & > p
        padding-top: 40px
        padding-bottom: 23px
        color: #4a4a4a
        font-size: 11px
        font-weight: 400
        text-transform: uppercase
      & h3
        padding-bottom: 23px
        border-bottom: 1px solid #e2e2e2
      & span
        padding-left: 10px
      & > a
        text-transform: uppercase
        margin-left: 0
        margin-top: 17px
</style>
