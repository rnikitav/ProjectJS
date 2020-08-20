<template>
  <div class="product-main-right">
    <div class="product-main-left-top">
      <div>
        <h3>Trending now</h3>
        <p>Bohemian<span>|</span>Floral<span>|</span>Lace Floral<span>|</span>Lace<span>|</span>Bohemian</p>
      </div>
      <div>
        <h3>Size</h3>
        <form>
          <label>
            <input type="checkbox" id="XXS" value="XXS" @change="setRangeRightValue" v-model="checkedSizes">XXS
          </label>
          <label>
            <input type="checkbox" id="XS" value="XS" @change="setRangeRightValue" v-model="checkedSizes">XS
          </label>
          <label>
            <input type="checkbox" id="S" value="S" @change="setRangeRightValue" v-model="checkedSizes">S
          </label>
          <label>
            <input type="checkbox" id="M" value="M" @change="setRangeRightValue" v-model="checkedSizes">M
          </label>
          <label>
            <input type="checkbox" id="L" value="L" @change="setRangeRightValue" v-model="checkedSizes">L
          </label>
          <label>
            <input type="checkbox" id="XL" value="XL" @change="setRangeRightValue" v-model="checkedSizes">XL
          </label>
          <label>
            <input type="checkbox" id="XXL" value="XXL" @change="setRangeRightValue" v-model="checkedSizes">XXL
          </label>
        </form>
      </div>
      <div>
        <h3>PRICE</h3>
        <div @submit.prevent class="container">
          <input type="range" min="0" step="1"
                 :max="getMaxPriceForRange.price"
                 @change="setRangeRightValue"
                 v-model.number="MinPrice">
          <input type="range" min="0" step="1"
                 :max="getMaxPriceForRange.price"
                 @change="setRangeRightValue"
                 v-model.number="MaxPrice">
          <br>
          <div class="container_price">
            <h4>Min Price: <span class="color-accent">{{ MinPrice }} $</span></h4>
            <h4>Max Price: <span class="color-accent">{{ MaxPrice }} $</span></h4>
          </div>
        </div>
      </div>
    </div>
    <div class="product-main-left-second">
      <div class="product-sortby">
        <div class="first-sortby">
          <p>Sort By</p>
            <select class="selectSort" @change="MethodSort(selected)" v-model="selected">
              <option selected label="Нет сортировки" value="No"></option>
              <option label="Name" value="Name"></option>
              <option label="Price" value="Price"></option>
              <option label="Newest Arrivals" value="Newest Arrivals"></option>
              <option label="Orders" value="Orders"></option>
            </select>
        </div>
        <div class="second-sortby">
          <p>Show</p>
          <details>
            <summary>09</summary>
            <ul>
              <a href="#"><li>06</li></a>
              <a href="#"><li>09</li></a>
              <a href="#"><li>12</li></a>
              <a href="#"><li>18</li></a>
            </ul>
          </details>
        </div>
      </div>
    </div>
    <div class="allimg__featured__main product__box__catalog">
      <div v-for="product of getProdForProductsSearch"
           :key="product.id_product"
           class="img-one-featured_main">
        <div class="featured-img">
          <router-link
            :to="`/Prod/${product.id_product}`">
            <img :src="require(`@/assets/img/${product.img}`)" :alt="product.product_name">
          </router-link>
        </div>
        <div class="featured-product-one">
          <router-link
            :to="`/Prod/${product.id_product}`" class="featured-link-name">{{product.product_name}}</router-link>
          <p class="featured-product-price color-accent">${{product.price}}</p>
        </div>
        <a @click.stop.prevent="addProductToCart(product)" href="#">
          <div class="img__featured_main__hover">
            <img src="../../assets/img/Forma_1_copy.png" alt="cart">
            <p class="feature-hover-p">Add to Cart</p>
          </div>
        </a>
      </div>
    </div>
    <div class="main__bottom">
      <div class="main__links__btm">
        <a href="#">&lt;</a>
        <a href="#" class="main__link__active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6.....20</a>
        <a href="#">&gt;</a>
      </div>
      <a href="#" class="view-all">View All</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'prodRight',
  data() {
    return {
      checkedSizes: [],
      MinPrice: 0,
      MaxPrice: null,
      selected: 'No',
    };
  },
  methods: {
    ...mapActions(['addProductToCart', 'filterProductsByPriceAndSizes', 'sortByName', 'sortByPrice']),
    max() {
      // this.$set(this.MaxPrice, 0, this.getMaxPriceForRange.price);
      this.MaxPrice = this.getMaxPriceForRange.price;
    },
    setRangeRightValue() {
      if (this.MinPrice > this.MaxPrice) {
        const tmp = this.MaxPrice;
        this.MaxPrice = this.MinPrice;
        this.MinPrice = tmp;
      }
      this.FilterPriceAndSizes({
        min: +this.MinPrice,
        max: +this.MaxPrice,
        size: this.checkedSizes,
      });
    },
    MethodSort(arg) {
      if (arg === 'Name') {
        this.sortByName();
      } else if (arg === 'Price') {
        this.sortByPrice();
      } else {
        this.setRangeRightValue();
      }
    },
    FilterPriceAndSizes(payload) {
      this.filterProductsByPriceAndSizes(payload);
    },
  },
  computed: {
    ...mapGetters(['getProdForProductsSearch', 'getMaxPriceForRange']),
  },
  mounted() {
    this.max();
  },
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  width: 262px
.container input
  width: 262px
.container_price
  display: flex
  justify-content: space-between
  align-items: center
.container svg, .container input[type=range]
  position: absolute
  left: 0
  top: 0
input[type=range]::-webkit-slider-thumb
  z-index: 999999
  position: relative
input[type=range]::-moz-range-thumb
  z-index: 999999
  position: relative
input[type=range]::-ms-thumb
  z-index: 999999
  position: relative
.selectSort
  height: 30px
  width: content-box
  padding-left: 10px
  padding-top: 2px
  border: 1px solid #ebebeb
  font-size: 14px
  outline: none
</style>
