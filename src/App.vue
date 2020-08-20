<template>
  <div id="app">
    <header class="header center">
      <div class="header__left">
        <div class="rotate-scale-down">
          <router-link to="/" class="logo"><img src="./assets/img/logo.png" alt="logo" class="logo__img">BRAN<span
            class="logo__lastlet">D</span></router-link>
        </div>
        <Search/>
      </div>
      <div class="header__right">
        <CartMiniHeader></CartMiniHeader>
        <a href="#" class="button">My Account <img src="./assets/img/arrow.png" class="button__arrow" alt=""></a>
      </div>
    </header>
    <nav class="nav center">
      <ul class="menu">
        <li class="menu__list"><router-link to="/" exact active-class="menu__link__active" class="menu__link">Home</router-link></li>
        <li class="menu__list"><router-link to="/products" active-class="menu__link__active" class="menu__link">Man</router-link>
          <navDrop class="drop__first"></navDrop>
        </li>
        <li class="menu__list"><router-link to="/newarrivals" active-class="menu__link__active" class="menu__link">Women</router-link>
          <navDrop class="drop__first"></navDrop>
        </li>
        <li class="menu__list"><router-link to="/Prod/1" class="menu__link">Kids</router-link>
          <navDrop class="drop__middle"></navDrop>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Accoseriese </a>
          <navDrop class="drop__middle"></navDrop>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Featured </a>
          <navDrop class="drop__last"></navDrop>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Hot Deals</a>
          <navDrop class="drop__last"></navDrop>
        </li>
      </ul>
    </nav>
    <router-view/>
    <subscribe></subscribe>
    <contactCenter></contactCenter>
    <footerVue></footerVue>
    <error></error>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Search from '@/components/search.vue';
import subscribe from '@/components/subscribe.vue';
import footerVue from '@/components/footer.vue';
import contactCenter from '@/components/contactCenter.vue';
import navDrop from '@/components/elem/navDrop.vue';
import CartMiniHeader from '@/components/Cart/CartMiniHeader.vue';
import error from './components/error.vue';

export default {
  name: 'Home',
  data() {
    return {
      searchInput: '',
      isActive: '/',
    };
  },
  components: {
    Search,
    navDrop,
    subscribe,
    contactCenter,
    footerVue,
    CartMiniHeader,
    error,
  },
  methods: {
    ...mapActions(['fetchProductsForMainAndProductsPages']),
  },
  computed: {
    // ActiveLink() {
    //   return this.isActive = this.$route;
    // },
  },
  mounted() {
    // console.log(this.$refs);
    // console.log(this);
    this.fetchProductsForMainAndProductsPages({ url: 'http://localhost:3000/api/products' });
  },
};
</script>
<style lang="sass" type="text/sass">
  @import "app.sass"
</style>
