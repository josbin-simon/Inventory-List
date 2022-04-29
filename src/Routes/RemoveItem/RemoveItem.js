import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { NoOfRowsInput } from '../../Components/NoOfRowsInput';

export class RemoveItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfRows: null, showInputRows: false, fields: [] };
  }

  setNumberOfRows = (event) => {
    this.setState({ showInputRows: true });
  };

  handleChange = (event) => {
    let fields = [];
    let n = this.state.numberOfRows || 0;
    for (let i = 0; i < n; i++) {
      fields.push({ code: '', quantity: '', key: i });
    }
    this.setState({ numberOfRows: event.target.value, fields });
  };

  render() {
    return (
      <Row>
        <Card>
          <Card.Body>
            <NoOfRowsInput
              label='No of Items going to Remove'
              type='number'
              placeholder='No of Items going to Remove'
              buttonText='Submit'
              onClick={this.setNumberOfRows}
              onChange={this.handleChange}
              value={this.state.numberOfRows}
            />
          </Card.Body>
        </Card>
      </Row>
    );
  }
}
