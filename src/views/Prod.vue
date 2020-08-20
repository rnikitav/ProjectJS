<template>
  <div><div class="main__content__all">
    <div class="slider">
      <imageProduct v-for="(oneimg, index) of product.imagesForCarusel"
                          :imag="oneimg"
                          :name="product.product_name"
                          :imgIndex="index"
                          :slideRight="toRight"
                          :slideLeft="toLeft"
                          :curInd="currentSlideIndex"
                          :key="index">
      </imageProduct>
    </div>
    <div class="btn__newarrivals__left btn__newarrivals">
      <button @click="prevSlide">&lt;</button>
    </div>
    <div class="btn__newarrivals__right btn__newarrivals">
      <button @click="nextSlide">&gt;</button>
    </div>
    <div class="content__new__bottom">
      <div class="product-name-description">
        <div class="box-castom-border">
          <h3>WOMEN COLLECTION</h3>
          <div class="castom-border">
            <div class="accent__notactive"></div>
            <div class="accent"></div>
            <div class="accent__notactive"></div>
          </div>
        </div>
        <h2>{{ product.product_name}}</h2>
      </div>
      <p class="p__new__content">Compellingly actualize fully researched processes before proactive outsourcing.
        Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize
        parallel core competencies rather than exceptional portals. </p>
      <div class="info__new">
        <p class="info__new_p">MATERIAL: <span>COTTON</span></p>
        <p class="info__new_p">DESIGNER: <span>BINBURHAN</span></p>
      </div>
      <h4>${{ product.price }}</h4>
      <div class="line__new"></div>
      <div class="order__new">
        <form action="buy">
          <div class="order__form__new__left">
            <p>CHOOSE COLOR</p>
            <details>
              <summary>Red</summary>
              <ul>
                <a href="#">
                  <li>Red</li>
                </a>
                <a href="#">
                  <li>Blue</li>
                </a>
                <a href="#">
                  <li>Green</li>
                </a>
              </ul>
            </details>
          </div>
          <div class="order__form__new__middle order__form__new__left">
            <p>CHOOSE SIZE</p>
            <details>
              <summary>XXL</summary>
              <ul>
                <prodSizes v-for="(item, index) of product.size"
                           :key="index"
                           :onesize="item"
                ></prodSizes>
              </ul>
            </details>
          </div>
          <div class="order__form__new__middle">
            <p>QUANTITY</p>
            <input type="number" min="1" required name="textfield" placeholder="1" v-model="quantity" class="input__newarrivals">
          </div>
        </form>
      </div>
      <div class="add-to-cart-all">
<!--        <a @click.prevent="addProductToCartWithQuantity({data: product, quantity: prodQuantity()})" href="#">-->
        <a @click.prevent="addProductToCartWithQuantity([ product, prodQuantity()])" href="#">
          <img src="@/assets/img/bbuy.png" alt="">
          <p>Add to Cart</p>
        </a>
      </div>
    </div>
  </div>
    <div class="may-like-also center">
      <h3>you may like also</h3>
      <div class="allimg__featured__main">
        <mayLikeAlso v-for="item of getProdYouMayLikeAlso"
           :key="item.id_product"
            :product="item">
        </mayLikeAlso>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import imageProduct from '../components/imageProduct.vue';
import prodSizes from '../components/prodSizes.vue';
import mayLikeAlso from '../components/mayLikeAlso.vue';

export default {
  name: 'Prod',
  components: {
    prodSizes,
    imageProduct,
    mayLikeAlso,
  },
  data() {
    return {
      ProdId: null,
      prodIsExist: Boolean,
      quantity: 1,
      currentSlideIndex: 0,
      toRight: Boolean,
      toLeft: Boolean,
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.ProdId = +id;
    next();
  },
  methods: {
    ...mapActions(['fetchAllProductsForOneProduct', 'addProductToCartWithQuantity']),
    prodQuantity() {
      // console.log(this.quantity);
      return this.quantity;
    },
    prevSlide() {
      this.toRight = false;
      this.toLeft = true;
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex -= 1;
      } else {
        this.currentSlideIndex = this.product.imagesForCarusel.length - 1;
      }
    },
    nextSlide() {
      this.toLeft = false;
      this.toRight = true;
      if (this.currentSlideIndex >= this.product.imagesForCarusel.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex += 1;
      }
    },
  },
  computed: {
    ...mapGetters(['getProductsForOneProduct', 'getProdYouMayLikeAlso']),
    product() {
      let result = {};
      this.getProductsForOneProduct.map((el) => {
        if (el.id_product === this.ProdId) {
          result = el;
          this.prodIsExist = true;
        }
        return null;
      });
      return result;
    },
  },
  mounted() {
    this.ProdId = +this.$route.params.id;
  },
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.newarrivals
  max-width: 1665px
  height: 148px
  margin: 0 auto
  background-color: #edc6ce


.newarrivals__all
  display: flex
  height: inherit
  justify-content: space-between
  align-items: center


.newarrivals__all > p
  color: $colorAccentSite
  font-size: 24px
  font-weight: 600
  line-height: 20px
  text-transform: uppercase


.newarrivals__links > ul
  display: flex
  list-style: none


.newarrivals_link
  font-size: 17px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  color: #636363


.newarrivals_link:hover
  color: $colorAccentSite


.newarrivals_link__active
  color: $colorAccentSite
  font-size: 17px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  &:hover
    color: #6f6e6e

.main__content__all
  max-width: 1600px
  min-height: 777px
  background-color: #f7f7f7
  position: relative
  z-index: 0
  margin: 0 auto


.main__content__all > img
  margin: 0 auto
  display: block

button
  outline: none
.btn__newarrivals button:active
  background-color: #803965 !important
.btn__newarrivals button
  position: absolute
  width: 47px
  height: 47px
  background-color: #bebebe
  color: #ffffff
  font-size: 18px
  font-weight: 600


.btn__newarrivals button:hover
  background-color: $colorAccentSite


.btn__newarrivals__left button
  top: 50%


.btn__newarrivals__right button
  top: 50%
  right: 0


.content__new__bottom
  min-height: 730px
  width: 1141px
  margin: 0 auto
  text-align: center
  border: 1px solid #eaeaea
  background-color: #ffffff


.product-name-description
  min-height: 78px
  margin-top: 73px
  margin-bottom: 55px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around


.castom-border
  display: flex
  width: 100%


.castom-border div
  flex: 1


.accent__notactive
  border-bottom: 2px solid #eaeaea


.accent
  border-bottom: 3px solid $colorAccentSite


.castom-border div:hover
  border-bottom: 3px solid #ef5b70


.box-castom-border h3
  color: $colorAccentSite
  font-size: 16px
  font-weight: 700
  line-height: 35px
  text-transform: uppercase


.product-name-description h2
  padding-top: 20px

  color: #4d4d4d
  font-size: 20px
  font-weight: 400
  line-height: 24px
  text-transform: uppercase


.p__new__content
  padding: 0 261px
  color: #5e5e5e
  font-size: 14px
  font-weight: 300
  line-height: 24px


.info__new
  margin-top: 28px
  margin-bottom: 37px
  padding: 0 359px
  display: flex
  justify-content: space-between


.info__new_p span
  color: #2f2f2f


.content__new__bottom h4
  margin-bottom: 43px
  color: #ef5b70
  font-size: 24px
  font-weight: 700
  line-height: 24px


.line__new
  margin: 0 250px
  height: 1px
  border: 1px solid #eaeaea
  background-color: #ef5b70


.order__new
  margin-top: 63px


.order__new form
  display: flex
  justify-content: space-between
  margin: 0 301px


.content__new__bottom > p:first-child
  color: $colorAccentSite
  margin-top: 73px
  font-size: 14px
  font-weight: 700
  line-height: 24px
  text-transform: uppercase


.info__new_p
  color: #b9b9b9
  font-size: 14px
  font-weight: 700
  line-height: 24px

.order__form__new__left
  position: relative
.order__form__new__left p
  color: #2f2f2f
  text-align: left
  font-size: 14px
  font-weight: 700
  line-height: 24px
  text-transform: uppercase


.order__form__new__left details
  margin-top: 10px
  width: 144px
  height: 35px
  border-radius: 0
  line-height: 34px
  color: #bcbcbc
  font-size: 13px
  font-weight: 400


.order__form__new__left details > ul
  list-style: none
  position: absolute
  left: -43px
  top: -4px


.order__form__new__middle details > ul
  top: -70px


.order__form__new__left a
  color: #bcbcbc


.order__form__new__left a:hover
  color: $colorAccentSite


.order__form__new__left summary::-webkit-details-marker
  display: none


.order__form__new__left summary::after
  content: '\25BC'
  height: 15px
  width: 15px
  background: #ffffff
  padding-left: 67px
  font-size: 10px


.order__form__new__left summary
  outline: none
  border: 1px solid #eaeaea


.order__form__new__middle p
  color: #2f2f2f
  text-align: left
  font-size: 14px
  font-weight: 700
  line-height: 24px
  text-transform: uppercase


.order__form__new__middle select
  margin-top: 10px
  width: 144px
  height: 35px


.input__newarrivals
  margin-top: 10px
  width: 144px
  height: 35px
  padding-left: 17px
  border: 1px solid #eaeaea
  color: #bcbcbc
  font-size: 13px
  font-weight: 400


.add-to-cart
  display: flex
  height: 55px
  align-items: center
  justify-content: center
  margin: 28px 302px 0 302px


.add-to-cart-all
  margin-bottom: 120px
  & > a
    color: #ef5b70
    font-size: 16px
    font-weight: 700
    display: flex
    width: 537px
    height: 55px
    justify-content: center
    align-items: center
    margin: 28px auto 0
    border: 1px solid #ef5b70
    transition: all 0.4s


.add-to-cart-all p
  margin-left: 15px


.add-to-cart-all > a:hover
  background: #898989


.may-like-also
  margin-top: 120px
  & > h3
    color: #4d4d4d
    font-size: 24px
    font-weight: 400
    text-transform: uppercase
    text-align: center
    margin-bottom: 70px


.margin-free
  height: 13px
</style>
