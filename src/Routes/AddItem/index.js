import { connect } from 'react-redux';
import { AddItem } from './AddItem';

const mapStateToProps = (state) => {
  return { ...state.ProductsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
