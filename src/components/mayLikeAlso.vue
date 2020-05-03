<template>
  <div class="img-one-featured_main">
    <div class="featured-img">
      <router-link
        :to="`/Prod/${product.id_product}`">
        <img :src="require(`@/assets/img/${product.img}`)" :alt="product.product_name">
      </router-link>
    </div>
    <div class="featured-product-one">
      <a href="#" class="featured-link-name">{{ product.product_name}}</a>
      <p class="featured-product-price color-accent">${{ product.price}}</p>
    </div>
    <a @click.stop.prevent="addProductToCart(product)">
      <div class="img__featured_main__hover">
        <img src="../assets/img/Forma_1_copy.png" alt="cart">
        <p class="feature-hover-p">Add to Cart</p>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'mayLikeAlso',
  props: ['product'],
  methods: {
    ...mapActions(['addProductToCart']),
  },
};
</script>

<style lang="sass">
.img__featured_main__hover
  cursor: pointer
</style>
