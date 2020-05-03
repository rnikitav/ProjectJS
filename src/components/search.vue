<template>
  <form class="header__form" action="#" @submit.prevent="searchCom(searchInput)">
    <div class="btn__browse">
      <details class="browse">
        <summary>Browse</summary>
        <div class="drop__browse">
          <div class="drop__flex__header">
            <h3 class="drop__h3">Women</h3>
            <ul class="drop__ul drop__ul__header">
              <li><a href="#" class="drop__link">Dresses </a></li>
              <li><a href="#" class="drop__link">Tops </a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits </a></li>
              <li><a href="#" class="drop__link">Jackets/Coats </a></li>
              <li><a href="#" class="drop__link">Blazers Denim </a></li>
              <li><a href="#" class="drop__link">Leggings/Pants </a></li>
              <li><a href="#" class="drop__link">Skirts/Shorts </a></li>
              <li><a href="#" class="drop__link">Accessories</a></li>
            </ul>
            <h3 class="drop__h3">MEN</h3>
            <ul class="drop__ul drop__ul__header">
              <li><a href="#" class="drop__link">Tees/Tank tops</a></li>
              <li><a href="#" class="drop__link">Shirts/Polos</a></li>
              <li><a href="#" class="drop__link">Sweaters</a></li>
              <li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
              <li><a href="#" class="drop__link">Blazers</a></li>
              <li><a href="#" class="drop__link">Jackets/vests</a></li>
            </ul>
          </div>
        </div>
      </details>
    </div>
    <input type="text" v-model.trim="searchInput" class="input__header" placeholder="Search for Item...">
    <button>
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    ...mapActions(['searchProductsMain', 'searchProductsPageProd']),
    searchCom(text) {
      if (this.$route.path === '/') {
        this.searchProductsMain(text);
      } else {
        this.searchProductsPageProd(text);
      }
    },
  },
  computed: {
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>
