<template>
  <div class="home">
    <promo></promo>
    <picturesPromo></picturesPromo>
    <section class="featured__items__main center">
      <h3>Fetured Items</h3>
      <p>Shop for items based on what we featured in this week</p>
      <div class="allimg__featured__main">
        <productsMain v-for="good of getMainProductsSearch"
                      :key="good.id_product"
                      :product="good">
        </productsMain>
      </div>
      <div class="browse-div-link">
        <a class="button button__2" href="#">Browse All Product &rarr;</a>
      </div>
    </section>
    <offerMain></offerMain>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import promo from '../components/main/promo.vue';
import picturesPromo from '../components/main/picturesPromo.vue';
import productsMain from '../components/main/productsMain.vue';
import offerMain from '../components/main/offerMain.vue';


export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    promo,
    picturesPromo,
    productsMain,
    offerMain,
  },
  methods: {
    // ...mapActions(['fetchAllProducts']),
    // filter(value){
    //   let regexp = new RegExp(value, 'i');
    //   this.filtered = [...products];
    //   this.filtered = this.products.filter(el => regexp.test(el.product_name));
    // },
  },
  computed: {
    ...mapGetters(['getMainProductsSearch']),
  },
  mounted() {
    // this.filter(this.search);
    // console.log(this);
    // this.fetchAllProducts();
  },
};
</script>
<style lang="sass">
$colorAccentSite: #f16d7f
.featured__items__main > h3
  color: #222222
  font-size: 30px
  font-weight: 700
  letter-spacing: 0.75px
  text-align: center
  line-height: 47px
  @at-root
    .featured__items__main > p
      color: #9f9f9f
      font-size: 14px
      font-weight: 400
      letter-spacing: 0.35px
      text-align: center
      margin-bottom: 60px
.allimg__featured__main
  display: flex
  margin-bottom: 40px
  justify-content: space-between
  flex-wrap: wrap
.button__2
  width: 212px
  height: 48px
  line-height: 40px

  &:hover
    color: $colorAccentSite
    background: #4d4d4d

.browse-div-link
  display: flex
  justify-content: center
</style>
