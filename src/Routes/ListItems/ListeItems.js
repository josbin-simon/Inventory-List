import React from 'react';
import { constants } from './constants';
import {CustomTable} from '../../Components/Table';

export class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div><CustomTable columns={constants.columns}
      data={this.props.products} /></div>;
  };
};
