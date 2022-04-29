// import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import InputField from '../../Components/InputField';
import { NoOfRowsInput } from '../../Components/NoOfRowsInput';
export class AddItem extends React.Component {
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
      fields.push({ name: '', code: '', quantity: '', key: i });
    }
    this.setState({ numberOfRows: event.target.value, fields });
  };

  render() {
    return (
      <Row>
        <Card>
          <Card.Body>
            <NoOfRowsInput
              label='No of Items going to Add'
              type='number'
              placeholder='No of Items going to Add'
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
