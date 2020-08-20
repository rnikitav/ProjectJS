<template>
  <div class="img-one-featured_main">
    <div class="featured-img">
      <router-link
        :to="`/Prod/${product.id_product}`">
        <img :src="require(`@/assets/img/${product.img}`)" :alt="product.product_name">
      </router-link>
    </div>
    <div class="featured-product-one">
      <router-link :to="`/Prod/${product.id_product}`" class="featured-link-name">{{ product.product_name }}</router-link>
      <p class="featured-product-price color-accent">${{product.price.toFixed(2)}}</p>
    </div>
    <a @click.stop.prevent="addProductToCart(product)" href="#">
      <div  class="img__featured_main__hover">
        <img src="../../assets/img/Forma_1_copy.png" alt="cart">
        <p class="feature-hover-p">Add to Cart</p>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'productsMain',
  props: ['product'],
  methods: {
    ...mapActions(['addProductToCart']),
    // proba(event) {
    //   console.log(event);
    //   console.log(event.target);
    // },
  },
  // console.log(this.product.price.toLocaleString('en-En'));
  // console.log(this.$parent.$parent);
  // },
};
</script>

<style lang="sass">
</style>
