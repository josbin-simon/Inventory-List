import React from 'react';
import { constants } from './constants';
import { CustomTable } from '../../Components/Table';
import { Card } from 'react-bootstrap';

export class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <CustomTable columns={constants.columns} data={this.props.products} />
        </Card.Body>
      </Card>
    );
  }
}
