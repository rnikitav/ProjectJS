<template>
  <section class="product__details center">
    <div v-if="getCartData.length > 0" class="product__details__top">
      <div class="product__details__top__left">
        <p>Product Details</p>
      </div>
      <div class="product__details__top__right">
        <p>unite Price</p>
        <p>Quantity</p>
        <p>shipping</p>
        <p>Subtotal</p>
        <p>ACTION</p>
      </div>
    </div>
    <div class="product__details__middle">
      <div v-if="getCartData.length === 0">
        <p class="cart_p_main">В Вашей корзине ничего нет</p>
      </div>
      <cartOneElMain v-for="good of getCartData"
                     :key="good.id_product"
                     :product="good">
      </cartOneElMain>
    </div>
    <div class="product__details__buttons">
      <a @click.prevent="ClearShopCart" href="#">cLEAR SHOPPING CART</a>
      <a href="#">cONTINUE sHOPPING</a>
    </div>
    <div class="product__details__bottom">
      <div>
        <h3>Shipping Adress</h3>
        <form action="shipping">
          <input type="countries" list="countries" placeholder="Bangladesh" required>
          <datalist id="countries">
            <option label="Bangladesh" value="Bangladesh"></option>
            <option label="Russia" value="Russia"></option>
            <option label="USA" value="USA"></option>
            <option label="Germany" value="Germany"></option>
            <option label="France" value="France"></option>
            <option label="China" value="China"></option>
          </datalist>
          <input class="input__color" type="text" id="State" placeholder="State" required>
          <input type="text" id="Postcode" placeholder="Postcode / Zip" required>
          <a href="#">get a quote</a>
        </form>
      </div>
      <div>
        <h3>coupon discount</h3>
        <p>Enter your coupon code if you have one</p>
        <form action="coupone">
          <input type="text" id="coupone" required placeholder="State">
          <a href="#">Apply coupon</a>
        </form>
      </div>
      <div>
        <div class="proceedtocheckout__box">
          <p>Sub total <span>$ {{ getTotalSumCart }}</span></p>
          <h3>GRAND TOTAL<span class="color-accent">$ {{ getTotalSumCart }}</span></h3>
          <a href="#" class="button">proceed to checkout</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cartOneElMain from './cartOneElMain.vue';

export default {
  name: 'mainCart',
  components: {
    cartOneElMain,
  },
  methods: {
    ...mapActions(['fetchCartData', 'ClearShoppingCart']),
    ClearShopCart() {
      if (window.confirm('Вы уверены , что хотите удалить корзину?')) {
        this.ClearShoppingCart();
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
.cart_p_main
  align-items: center
  font-size: 34px
  display: flex
  justify-content: center
  margin: 155px 17px
  color: darkviolet
</style>
