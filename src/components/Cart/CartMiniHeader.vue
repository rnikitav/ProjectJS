<template>
  <div class="basket">
    <a @click.prevent href="#">
      <p
        v-if="getCartData.length>0"
        class="quantity-product"
      >
        {{getCartData.length}}
      </p>
      <img @click="showCart($event)" src="@/assets/img/cart.png" alt="card">
    </a>
    <div class="myaccount__dropdownlist ">
      <div @mouseleave="showCart($event)" class="myaccount__dropdownlist_flex animated hidden">
        <div v-if="getCartData.length === 0">
          <p class="cart_p">В Вашей корзине ничего нет</p>
        </div>
        <cartOneEl
          v-for="prod of getCartData"
          :key="prod.id_product"
          :product="prod"
        ></cartOneEl>
        <div class="basket__price-p">
          <p>Total</p>
          <p>$ {{getTotalSumCart}}</p>
<!--          <p>{{getCartData.length * 2}}</p>-->
        </div>
        <router-link to="/checkout" class="basket__a__two basket__a__checkout">Checkout</router-link>
        <router-link to="/shoppingCart" class="basket__a__two basket__a__gotocart">shoppingCart</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cartOneEl from './cartOneEl.vue';

export default {
  name: 'CartMiniHeader',
  data() {
    return {
      // quantity: 1,
    };
  },
  components: {
    cartOneEl,
  },
  methods: {
    ...mapActions(['fetchCartData']),
    showCart(event) {
      const divForHidden = event.target.parentNode.parentNode.children[1].children[0];
      if (divForHidden.classList.contains('hidden')) {
        divForHidden.classList.remove('hidden', 'flipOutY');
        divForHidden.classList.add('zoomIn');
      } else {
        divForHidden.classList.remove('zoomIn');
        divForHidden.classList.add('flipOutY');
        setTimeout(() => {
          divForHidden.classList.add('hidden');
        }, 750);
      }
    },
  },
  computed: {
    ...mapGetters(['getCartData', 'getTotalSumCart']),
  },
  mounted() {
    this.fetchCartData();
  },
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.hidden
  display: none
.quantity-product
  font-weight: 700
  font-size: 17px
  display: inline
  padding: 0 5px
  background: $colorAccentSite
  color: #ffffff
  border-radius: 50px
  text-align: center
  position: absolute
  top: -16px
  right: 1px
.card-mini__product-btn-del
  border: none
  outline: none
  margin-left: 33px
  background: transparent
  color: silver
  font-size: 20px
.card-mini__product-btn-del:hover
  color: $colorAccentSite
.cart_p
  margin: 55px 17px
  color: darkviolet
</style>
