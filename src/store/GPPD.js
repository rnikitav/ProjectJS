export default {
  actions: {
    async changeProduct({ dispatch }, data) {
      console.log(data);
      console.log(dispatch);
      return fetch(data.url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json());
    },

    async addNewProduct({ dispatch }, data) {
      console.log(dispatch);
      return fetch(data.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.prod),
      }).then((result) => result.json());
    },
    async deleteProduct({ dispatch }, data) {
      console.log(dispatch);
      return fetch(data.url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json());
    },
  },
};
