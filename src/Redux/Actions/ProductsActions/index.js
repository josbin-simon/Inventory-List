import { ADD_PRODUCTS } from '../../Redux.constants';

export const addProducts = (payload) => {
  return { type: ADD_PRODUCTS, payload };
};
