import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InquiryForm.css';

const InquiryForm = () => {
  return (
    <Container className="inquiry-form-container text-center">
      <Row className="my-4">
        <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" className="form-control" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Phone no." className="form-control" />
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Email" className="form-control" />
            </Col>
            <Col>
              <Form.Control as="select" className="form-select">
                <option>Courses</option>
                <option>Sap Courses</option>
                <option>HR Courses</option>
                <option>Software Development</option>
                <option>Digital Marketing</option>
                <option>Data Science</option>
                <option>Salesforce</option>
                <option>Cloud Computing</option>
                <option>Full Stack</option>
              </Form.Control>
            </Col>
            <Col>
              <Button variant="primary" type="submit" className="btn">Send</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default InquiryForm;
