export default {
  state: {
    allProductsArr: [],
    youMayLikeAlso: [],
  },
  mutations: {},
  actions: {},
  getters: {
    getProductsForOneProduct(state) {
      return state.allProductsArr;
    },
    getProdYouMayLikeAlso(state) {
      return state.youMayLikeAlso;
    },
  },
};
