export default {
  state: {
    searchArrMain: [],
    sortByName: [],
    sortByPrice: [],
    filteredMain: [],
    filteredProducts: [], // ЭТОТ МАССИВ ИДЕТ НА ОТРИСОВКУ ТОВАРОВ НА СТРАНИЦЕ  ИЗНАЧАЛЬНО В НЕМ ВСЕ ПРОДУКТЫ
    filterPriceArr: [], // ЭТОТ ИДЕТ ДЛЯ ФИЛЬТРАЦИИ ПО ЦЕНЕ И РАЗМЕРУ   ИЗНАЧАЛЬНО ОН ВСЕМИ ТОВАРАМИ ЗАПОЛНЯЕТСЯ
    searchArrProducts: [], // ЭТОТ ДЛЯ ВТОРОГО УСЛОВИЯ ПОИСКА ТОЖЕ ИЗНАЧАЛЬНО ПОЛНЫЙ ВСЕМИ ТОВАРАМИ
    TextSearchArr: [],
  },
  mutations: {
    SEARCH_MAIN_PAGE(state, data) {
      const regexp = new RegExp(data, 'i');
      state.filteredMain = state.searchArrMain.filter((el) => regexp.test(el.product_name));
    },
    SEARCH_PRODUCT_PAGE(state, data) {
      const regexp = new RegExp(data, 'i');
      state.filteredProducts = state.filterPriceArr.filter((el) => regexp.test(el.product_name));
      if (data.length > 0) {
        state.TextSearchArr = [...state.filteredProducts];
      }
    },
    FILTER_PRODUCTS_BY_PRICES(state, payload) {
      if (payload.size.length > 0) {
        state.filteredProducts = [];
        state.filterPriceArr = [...state.searchArrProducts];
        state.filterPriceArr = state.filterPriceArr.filter((item) => (item.price >= payload.min && item.price <= payload.max));
        state.filterPriceArr.forEach((product) => {
          let totalCoincidences = 0;
          payload.size.forEach((ActiveSize) => {
            if (product.size.includes(ActiveSize)) {
              totalCoincidences += 1;
            }
          });
          if (totalCoincidences === payload.size.length) {
            state.filteredProducts.push(product);
            state.filterPriceArr = [...state.filteredProducts];
          }
        });
      } else {
        state.filterPriceArr = [...state.searchArrProducts];
        state.filterPriceArr = state.filterPriceArr.filter((item) => (item.price >= payload.min && item.price <= payload.max));
        state.filteredProducts = [...state.filterPriceArr];
      }
    },
    SORT_BY_NAME(state) {
      state.sortByName = [...state.filteredProducts];
      state.sortByName.sort((a, b) => {
        if (a.product_name > b.product_name) {
          return 1;
        }
        if (a.product_name < b.product_name) {
          return -1;
        }
        return 0;
      });
      state.filteredProducts = [...state.sortByName];
    },
    SORT_BY_PRICE(state) {
      state.sortByPrice = [...state.filteredProducts];
      state.sortByPrice.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      state.filteredProducts = [...state.sortByPrice];
    },
  },
  actions: {
    searchProductsMain({ commit }, text) {
      commit('SEARCH_MAIN_PAGE', text);
    },
    searchProductsPageProd({ commit }, text) {
      commit('SEARCH_PRODUCT_PAGE', text);
    },
    filterProductsByPriceAndSizes({ commit }, payload) {
      commit('FILTER_PRODUCTS_BY_PRICES', payload);
    },
    sortByName({ commit }) {
      commit('SORT_BY_NAME');
    },
    sortByPrice({ commit }) {
      commit('SORT_BY_PRICE');
    },
  },
  getters: {
    getMainProductsSearch(state) {
      return state.filteredMain;
    },
    getProdForProductsSearch(state) {
      return state.filteredProducts;
    },
    getMaxPriceForRange(state) {
      return state.searchArrProducts.reduce((acc, curr) => (acc.price > curr.price ? acc : curr));
    },
  },
};
