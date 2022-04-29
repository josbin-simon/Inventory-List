// import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import InputField from '../../Components/InputField';
import { NoOfRowsInput } from '../../Components/NoOfRowsInput';
import { ROUTES } from '../../Routes.constants';
import { AddProductForm } from './Children/AddProdcutForm';
import { checkForError } from './validateInput';
export class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: null,
      showInputRows: false,
      fields: [],
      submitClicked: false,
    };
  }

  setNumberOfRows = (event) => {
    let fields = [];
    let n = this.state.numberOfRows || 0;
    for (let i = 0; i < n; i++) {
      fields.push({
        name: '',
        code: '',
        quantity: '',
        index: i,
        nameError: 'Product Name Required',
        codeError: 'Product Code Required',
        quantityError: 'Quantity Required',
      });
    }
    this.setState({ showInputRows: true, fields });
  };

  handleChange = (event) => {
    this.setState({ numberOfRows: event.target.value });
  };
  handleNameChange = (event) => {
    let fields = this.state.fields.map((item) => {
      if (item.index === event.index) {
        item.name = event.value;
        if (!event.value) item.nameError = 'Product Name Required';
        else item.nameError = '';
        return item;
      } else return item;
    });
    this.setState({ fields });
  };
  handleCodeChange = (event) => {
    let fields = this.state.fields.map((item) => {
      if (item.index === event.index) {
        item.code = event.value;
        if (!event.value) item.codeError = 'Product Code Required';
        else item.codeError = '';
        return item;
      } else return item;
    });
    this.setState({ fields });
  };
  handleQuantityChange = (event) => {
    let fields = this.state.fields.map((item) => {
      if (item.index === event.index) {
        item.quantity = event.value;
        if (!event.value) item.quantityError = 'Quantity Required';
        else if (Number(event.value) < 1)
          item.quantityError = 'Enter Valid Quantity';
        else item.quantityError = '';
        return item;
      } else return item;
    });
    this.setState({ fields });
  };
  handleFormSubmit = () => {
    this.setState({ submitClicked: true });
    if (!checkForError(this.state.fields)) {
      this.props.addProducts(this.state.fields);
      this.setState({
        numberOfRows: null,
        showInputRows: false,
        fields: [],
        submitClicked: false,
      });
      this.props.history.push(ROUTES.LIST_ITEMS);
    }
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
            {this.state.showInputRows &&
              !!this.state.numberOfRows &&
              this.state.fields.map((item) => {
                return (
                  <React.Fragment key={item.index}>
                    <Row>
                      <AddProductForm
                        handleNameChange={this.handleNameChange}
                        handleCodeChange={this.handleCodeChange}
                        handleQuantityChange={this.handleQuantityChange}
                        submitClicked={this.state.submitClicked}
                        {...item}
                      />
                    </Row>
                  </React.Fragment>
                );
              })}
            {this.state.showInputRows &&
              this.state.numberOfRows &&
              this.state.numberOfRows !== '0' && (
                <Row className='mt-3'>
                  <Col>
                    <Button
                      variant='primary'
                      type='submit'
                      onClick={this.handleFormSubmit}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              )}
          </Card.Body>
        </Card>
      </Row>
    );
  }
}
