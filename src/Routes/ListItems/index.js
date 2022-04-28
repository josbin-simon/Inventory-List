import { connect } from 'react-redux';
import { ListItems } from './ListeItems';

const mapStateToProps = (state) => {
  return {
    ...state.ProductsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
