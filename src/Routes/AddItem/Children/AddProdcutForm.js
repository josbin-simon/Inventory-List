import React from 'react';
import { Card, Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
export class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
  }
  // eslint-disable-next-line weavers-react/react_maxlines_per_function
  render() {
    return (
      <Form validated={this.props.submitClicked}>
        <Row className='g-2 mb-2'>
          <Col md>
            <FloatingLabel controlId='floatingInputGrid1' label='Product Name'>
              <Form.Control
                required
                type='text'
                placeholder='Product Name'
                value={this.props.name}
                onChange={(e) =>
                  this.props.handleNameChange({
                    value: e.target.value,
                    index: this.props.index,
                  })
                }
              />
              {this.props.nameError && (
                <Form.Control.Feedback type='invalid'>
                  {this.props.nameError}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId='floatingInputGrid2' label='Product Code'>
              <Form.Control
                required
                type='text'
                placeholder='Product Code'
                value={this.props.code}
                onChange={(e) =>
                  this.props.handleCodeChange({
                    value: e.target.value,
                    index: this.props.index,
                  })
                }
              />
              {this.props.codeError && (
                <Form.Control.Feedback type='invalid'>
                  {this.props.codeError}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId='floatingInputGrid3' label='Quantity'>
              <Form.Control
                required
                type='number'
                min='1'
                step='1'
                placeholder='Quantity'
                value={this.props.quantity}
                onChange={(e) =>
                  this.props.handleQuantityChange({
                    value: e.target.value,
                    index: this.props.index,
                  })
                }
              />
              {this.props.quantityError && (
                <Form.Control.Feedback type='invalid'>
                  {this.props.quantityError}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Col>
        </Row>
      </Form>
    );
  }
}
