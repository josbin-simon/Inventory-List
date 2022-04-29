import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

export const NoOfRowsInput = (props) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group className='mb-3'>
        <Row className='mb-3'>
          <Form.Label>{props.label}</Form.Label>
          <Col>
            <Form.Control
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              value={props.value}
            />
          </Col>
          <Col>
            <Button
              variant='primary'
              type='submit'
              onClick={(e) => props.onClick && props.onClick(e)}
            >
              {props.buttonText}
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};
