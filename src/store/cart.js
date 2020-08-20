export default {
  state: {
    cartArr: [],
  },
  mutations: {
    FETCH_CART_ARRAY(state, data) {
      state.cartArr = [...data];
    },
    ADD_PRODUCT_TO_CART_ALREADY_EXIST(state, indexOfProdInArr) {
      state.cartArr[indexOfProdInArr].quantity += 1;
    },
    ADD_PRODUCT_TO_CART(state, product) {
      state.cartArr.push(product);
    },
    ADD_PRODUCT_TO_CART_WITH_QUANTITY(state, payload) {
      if (payload.indexOfProdInArr !== undefined) {
        state.cartArr[payload.indexOfProdInArr].quantity += payload.quantity;
      } else {
        state.cartArr.push(payload);
      }
      console.log(payload);
      console.log(payload.indexOfProdInArr);
    },
    REMOVE_ONE_PRODUCT_FROM_BASKET(state, data) {
      const find = state.cartArr.find((el) => el.id_product === data.id_product);
      find.quantity -= 1;
    },
    DELETE_ITEM_FROM_CART_GLOBAL(state, data) {
      state.cartArr.splice(state.cartArr.indexOf(data), 1);
    },
    CLEAR_SHOP_CART(state) {
      state.cartArr = [];
    },
  },
  actions: {
    async fetchCartData({ commit, rootState, dispatch }) {
      return fetch('http://localhost:3000/api/cart')
        .then((response) => response.json())
        .then((data) => {
          console.log(dispatch);
          commit('FETCH_CART_ARRAY', data);
        })
        .catch((err) => {
          // eslint-disable-next-line no-param-reassign
          rootState.err.errorText = err;
        });
    },
    addProductToCart({ dispatch, commit, state }, product) {
      const find = state.cartArr.find((el) => el.id_product === product.id_product);
      if (!find) {
        const prod = { quantity: 1, ...product };
        dispatch('addNewProduct', {
          url: 'http://localhost:3000/api/cart',
          prod,
        })
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_PRODUCT_TO_CART', prod);
            }
          });
      } else {
        const ind = state.cartArr.indexOf(find);
        dispatch('changeProduct', {
          url: `http://localhost:3000/api/cart/${find.id_product}`,
          quantity: 1,
        })
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_PRODUCT_TO_CART_ALREADY_EXIST', ind);
            }
          });
      }
      // dispatch('fetchCartData');
    },
    addProductToCartWithQuantity({ state, dispatch, commit }, [product, quantity]) {
      const find = state.cartArr.find((el) => el.id_product === product.id_product);
      if (find) {
        const ind = state.cartArr.indexOf(find);
        dispatch('changeProduct', {
          url: `http://localhost:3000/api/cart/${find.id_product}`,
          quantity: +quantity,
        })
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_PRODUCT_TO_CART_WITH_QUANTITY', {
                indexOfProdInArr: ind,
                quantity: +quantity,
              });
            }
          });
      } else {
        const prod = { quantity: +quantity, ...product };
        dispatch('addNewProduct', {
          url: 'http://localhost:3000/api/cart',
          prod,
        })
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_PRODUCT_TO_CART_WITH_QUANTITY', prod);
            }
          });
      }
    },
    removeProductFromCart({ commit, dispatch }, data) {
      if (data.quantity > 1) {
        dispatch('changeProduct', {
          url: `http://localhost:3000/api/cart/${data.id_product}`,
          quantity: -1,
        })
          .then((res) => {
            if (res.result === 1) {
              commit('REMOVE_ONE_PRODUCT_FROM_BASKET', data);
            }
          });
      } else {
        dispatch('deleteProduct', {
          url: `http://localhost:3000/api/cart/${data.id_product}`,
        })
          .then((res) => {
            if (res.result === 1) {
              commit('DELETE_ITEM_FROM_CART_GLOBAL', data);
            }
          });
      }
    },
    deleteItemFromCart({ commit, dispatch }, data) {
      dispatch('deleteProduct', {
        url: `http://localhost:3000/api/cart/${data.id_product}`,
      })
        .then((res) => {
          if (res.result === 1) {
            commit('DELETE_ITEM_FROM_CART_GLOBAL', data);
          }
        });
    },
    ClearShoppingCart({ dispatch, commit }) {
      dispatch('deleteProduct', {
        url: 'http://localhost:3000/api/cart',
      })
        .then((data) => {
          if (data.result === 1) {
            commit('CLEAR_SHOP_CART');
          }
        });
    },
  },
  getters: {
    getCartData(state) {
      return state.cartArr;
    },
    getTotalSumCart(state) {
      let sum = 0;
      state.cartArr.forEach((el) => {
        if (el.shipping === 'FREE') {
          sum += (+el.quantity * el.price);
        } else {
          const regExp = el.shipping.match(/\d/g).join('');
          sum += (((+el.price) * (+el.quantity)) + +regExp);
        }
      });
      return sum.toFixed(2);
    },
  },
};
