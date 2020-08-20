import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';
import searchModule from './searchModule';
import productModule from './productModule';
import error from './error';
import GPPD from './GPPD';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    search: searchModule,
    cartModule: cart,
    oneProduct: productModule,
    err: error,
    post: GPPD,
  },
  state: {
    // cartData: [],
    // allProdArr: [
    //   {
    //     id_product: 1,
    //     position: ['main'],
    //     size: ['S', 'M', 'L', 'XL'],
    //     product_name: 'Мужская майка',
    //     price: 32.00,
    //     shipping: '2$',
    //     img: 'Layer_2.jpg',
    //     imagesForCarusel: ['Layer_2.jpg', 'Layer_3.jpg', 'Layer_4.jpg'],
    //   },
    //   {
    //     id_product: 2,
    //     position: ['main', 'products'],
    //     size: ['S', 'L', 'XL'],
    //     product_name: 'Женская майка',
    //     price: 30.55,
    //     shipping: '1$',
    //     img: 'Layer_3.jpg',
    //     imagesForCarusel: ['Layer_3.jpg', 'Layer_3.jpg', 'Layer_3.jpg'],
    //   },
    //   {
    //     id_product: 3,
    //     position: ['main', 'products'],
    //     size: ['S', 'M'],
    //     product_name: 'Мужская куртка',
    //     price: 72.51,
    //     shipping: '3$',
    //     img: 'Layer_4.jpg',
    //     imagesForCarusel: ['Layer_4.jpg', 'Layer_4.jpg', 'Layer_4.jpg'],
    //   },
    //   {
    //     id_product: 4,
    //     position: ['main'],
    //     size: ['S', 'M', 'L', 'XL'],
    //     product_name: 'Женское платье',
    //     price: 52.85,
    //     shipping: '1$',
    //     img: 'Layer_5.jpg',
    //     imagesForCarusel: ['Layer_5.jpg', 'Layer_5.jpg', 'Layer_5.jpg'],
    //   },
    //   {
    //     id_product: 5,
    //     position: ['main'],
    //     size: ['S', 'M', 'L', 'XL'],
    //     product_name: 'Женское платье 2',
    //     price: 42.99,
    //     shipping: 'FREE',
    //     img: 'Layer_6.jpg',
    //     imagesForCarusel: ['Layer_6.jpg', 'Layer_6.jpg', 'Layer_6.jpg'],
    //   },
    //   {
    //     id_product: 6,
    //     position: ['main', 'products'],
    //     size: ['S', 'M', 'L', 'XL'],
    //     product_name: 'Мужской пиджак',
    //     price: 62.11,
    //     shipping: '2$',
    //     img: 'Layer_7.jpg',
    //     imagesForCarusel: ['Layer_7.jpg', 'Layer_7.jpg', 'Layer_7.jpg'],
    //   },
    //   {
    //     id_product: 7,
    //     position: ['main'],
    //     size: ['L', 'XL'],
    //     product_name: 'Мужские штаны',
    //     price: 35.23,
    //     shipping: 'FREE',
    //     img: 'Layer_8.png',
    //     imagesForCarusel: ['Layer_8.png', 'Layer_8.png', 'Layer_8.png'],
    //   },
    //   {
    //     id_product: 8,
    //     position: ['main', 'products'],
    //     size: ['S', 'M', 'L', 'XL'],
    //     product_name: 'Мужские шорты',
    //     price: 30.44,
    //     shipping: '1$',
    //     img: 'Layer_9.jpg',
    //     imagesForCarusel: ['Layer_9.jpg', 'Layer_9.jpg', 'Layer_9.jpg'],
    //   },
    //   {
    //     id_product: 9,
    //     position: ['products'],
    //     size: ['XXS', 'XS', 'XL', 'XXL'],
    //     product_name: 'Мужская куртка черная',
    //     price: 92.57,
    //     shipping: 'FREE',
    //     img: 'Layer_01.jpg',
    //     imagesForCarusel: ['Layer_01.jpg', 'Layer_01.jpg', 'Layer_01.jpg'],
    //   },
    //   {
    //     id_product: 10,
    //     position: ['products'],
    //     size: ['XXL'],
    //     product_name: 'Мужская куртка коричневая',
    //     price: 122.00,
    //     shipping: 'FREE',
    //     img: 'Layer_02.jpg',
    //     imagesForCarusel: ['Layer_02.jpg', 'Layer_02.jpg', 'Layer_02.jpg'],
    //   },
    //   {
    //     id_product: 11,
    //     position: ['products'],
    //     size: ['XXS'],
    //     product_name: 'Безрукавка Синяя',
    //     price: 72.5,
    //     shipping: 'FREE',
    //     img: 'First.jpg',
    //     imagesForCarusel: ['First.jpg', 'First.jpg', 'First.jpg'],
    //   },
    //   {
    //     id_product: 12,
    //     position: ['products'],
    //     size: ['S', 'M', 'L', 'XXL'],
    //     product_name: 'Мужская куртка черная 2',
    //     price: 192.00,
    //     shipping: '2$',
    //     img: 'Layer_05.jpg',
    //     imagesForCarusel: ['Layer_05.jpg', 'Layer_05.jpg', 'Layer_05.jpg'],
    //   },
    //   {
    //     id_product: 13,
    //     position: ['products'],
    //     size: ['S', 'M', 'L', 'XXL'],
    //     product_name: 'Мужская майка синия',
    //     price: 22.99,
    //     shipping: 'FREE',
    //     img: 'Second.jpg',
    //     imagesForCarusel: ['Second.jpg', 'Second.jpg', 'Second.jpg'],
    //   },
    //   {
    //     id_product: 14,
    //     position: ['oneproduct'],
    //     size: ['S', 'M', 'L', 'XXL'],
    //     product_name: 'Женское платье',
    //     price: 125.99,
    //     shipping: 'FREE',
    //     img: 'one1.jpg',
    //     imagesForCarusel: ['one1.jpg', 'one1.jpg', 'one1.jpg'],
    //   },
    //   {
    //     id_product: 15,
    //     position: ['oneproduct'],
    //     size: ['S', 'M', 'L', 'XXL'],
    //     product_name: 'Женская юбка',
    //     price: 75.99,
    //     shipping: 'FREE',
    //     img: 'one2.jpg',
    //     imagesForCarusel: ['one2.jpg', 'one2.jpg', 'one2.jpg'],
    //   },
    //   {
    //     id_product: 16,
    //     position: ['oneproduct'],
    //     size: ['S', 'M', 'L', 'XXL'],
    //     product_name: 'женские штаны',
    //     price: 45.99,
    //     shipping: 'FREE',
    //     img: 'one3.jpg',
    //     imagesForCarusel: ['one3.jpg', 'one3.jpg', 'one3.jpg'],
    //   },
    //   {
    //     id_product: 17,
    //     position: ['oneproduct'],
    //     size: ['S', 'M', 'L', 'XXL'],
    //     product_name: 'Женское платье 2',
    //     price: 125.99,
    //     shipping: 'FREE',
    //     img: 'one1.jpg',
    //     imagesForCarusel: ['one1.jpg', 'one1.jpg', 'one1.jpg'],
    //   },
    // ],
  },
  mutations: {
    SET_ARR_GOODS_MAIN_PRODUCTS(state, data) {
      const MainEmptySearchArr = [];
      const ProductsEmptySearchArr = [];
      const youMayLikeAlso = [];
      data.forEach((el) => {
        el.position.forEach((pos) => {
          if (pos === 'main') {
            MainEmptySearchArr.push(el);
          }
          if (pos === 'products') {
            ProductsEmptySearchArr.push(el);
          }
          if (pos === 'oneproduct') {
            youMayLikeAlso.push(el);
          }
        });
        // return MainArr;
      });
      state.search.searchArrMain = [...MainEmptySearchArr];
      state.search.filteredMain = [...MainEmptySearchArr];
      state.search.filteredProducts = [...ProductsEmptySearchArr];
      state.search.filterPriceArr = [...ProductsEmptySearchArr];
      state.search.searchArrProducts = [...ProductsEmptySearchArr];
      state.oneProduct.youMayLikeAlso = [...youMayLikeAlso];
    },
    SET_ARR_PRODUCTS_ALL_FOR_ONE_PRODUCT(state, data) {
      state.oneProduct.allProductsArr = [...data];
    },
  },
  actions: {
    async fetchProductsForMainAndProductsPages({ commit, state }) {
      return fetch('http://localhost:3000/api/products')
        .then((response) => response.json())
        .then((data) => {
          commit('SET_ARR_GOODS_MAIN_PRODUCTS', data);
          commit('SET_ARR_PRODUCTS_ALL_FOR_ONE_PRODUCT', data);
        })
        .catch((err) => {
          state.err.errorText = err;
        });
    },
  },
  getters: {
  },
});
