<template>
  <div class="product__details__middle__one__item">
    <router-link :to="`/Prod/${product.id_product}`"><img :src="require(`@/assets/img/${product.img}`)" :alt="product.product_name"></router-link>
    <div class="product__details__middle__one__item__left">
      <router-link :to="`/Prod/${product.id_product}`"><h3>{{ product.product_name }}</h3></router-link>
      <p>Color:<span>Red</span></p>
      <p> Size:<span>Xll</span></p>
    </div>
    <div class="product__details__middle__one__item__right">
      <p>{{ product.price }}</p>
      <div class="cart__product-param quantity">
        <div class="cart__product-quantity">
          <button
            @click.prevent="removeProductFromCart(product)"
          ><i class="fas fa-minus-circle"></i></button>
          <h5>{{product.quantity}}</h5>
          <button
            @click="addProductToCart(product)"
          ><i class="fas fa-plus-circle"></i></button>
        </div>
      </div>
      <p class="p_min_width">{{ product.shipping }}</p>
      <p class="subTotalWidth">$ {{ getSubtotalOneProd(product) }} </p>
      <a @click.prevent="deleteItemFromCart(product)" href="#"><i class="fas fa-times-circle"></i></a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'cartOneElMain',
  props: ['product'],
  methods: {
    ...mapActions(['removeProductFromCart', 'addProductToCart', 'deleteItemFromCart']),
    getSubtotalOneProd(product) {
      if (product.shipping === 'FREE') {
        return ((+product.price) * (+product.quantity)).toFixed(2);
      }
      const regExp = product.shipping.match(/\d/g).join('');
      return (((+product.price) * (+product.quantity)) + +regExp).toFixed(2);
    },
  },
  computed: {
  },
};
</script>

<style lang="sass">
.cart__product-quantity
  display: flex
  justify-content: center
  align-items: center
  color: #656565
  font-size: 17px
  font-weight: 600
  padding-right: 97px
  & > h5
    padding: 0 10px
.product__details__middle__one__item > a > img
  height: 115px
  width: 100px
.p_min_width
  min-width: 39px
  text-align: center
.subTotalWidth
  min-width: 55px
.fa-minus-circle
  color: #ff607e
.fa-plus-circle
  color: #4aef4a
</style>
