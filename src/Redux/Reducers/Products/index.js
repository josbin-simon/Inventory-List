import { initialState } from './initialState';
import { ADD_PRODUCTS } from '../../Redux.constants';
import { addProducts } from './helper';

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return addProducts(state, action.payload);
    default:
      return { ...state };
  }
};

export default ProductsReducer;
