export const addProducts = (state, payload) => {
  let currentList = state.products;
  payload.map((item) => {
    let product = currentList.find((product) => product.code === item.code);
    if (product) {
      product.quantity = parseInt(product.quantity) + parseInt(item.quantity);
    } else {
      currentList.push({
        name: item.name,
        code: item.code,
        quantity: item.quantity,
      });
    }
  });
  return { ...state, ...currentList };
};
