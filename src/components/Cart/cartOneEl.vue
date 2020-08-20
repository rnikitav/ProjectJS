<template>
  <div class="myaccount__drop__one">
    <router-link :to="`/Prod/${product.id_product}`">
      <img :src="require(`@/assets/img/${product.img}`)" :alt="product.product_name" class="image_cart_mini">
    </router-link>
    <div class="basket__drop_right">
      <a @click.prevent.stop href="#">
        <h4>{{product.product_name}}</h4>
      </a>
      <img src="@/assets/img/stars.png" alt="stars">
      <p>{{ product.quantity }} <span class="basket-span"> x </span>$ {{ product.price }}</p>
    </div>
    <button @click.prevent="removeProductFromCart(product)" class="card-mini__product-btn-del">
      <i class="fas fa-times-circle"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'cartOneEl',
  props: ['product'],
  methods: {
    ...mapActions(['removeProductFromCart']),
  },
};
</script>

<style lang="sass">
.image_cart_mini
  width: 72px
  height: 85px
</style>
