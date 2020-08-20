const add = (cart, req) => {
  cart.push(req.body);
  return { prodName: req.body.product_name, newCart: JSON.stringify(cart, null, 4)};
};
const change = (cart, req) => {
  const find = cart.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  return { prodName: find.product_name, newCart: JSON.stringify(cart, null, 4)};
};
const del = (cart, req) => {
  const find = cart.find(el => el.id_product === +req.params.id);
  cart.splice(cart.indexOf(find), 1);
  return { prodName: find.product_name, newCart: JSON.stringify(cart, null, 4)};
};
const clear = () => {
  return {newCart: JSON.stringify([], null, 4) };
};

module.exports = {
  add,
  change,
  del,
  clear,
};
