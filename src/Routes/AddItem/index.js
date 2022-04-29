import { connect } from 'react-redux';
import { AddItem } from './AddItem';
import { addProducts } from '../../Redux/Actions';

const mapStateToProps = (state) => {
  return { ...state.ProductsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: (payload) => dispatch(addProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
