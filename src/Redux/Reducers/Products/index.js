import { initialState } from './initialState';

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return { ...state };
        default:
            return { ...state };
    };
};

export default ProductsReducer;