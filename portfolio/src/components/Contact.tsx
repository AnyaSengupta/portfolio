import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../Contact.css";

const Contact: React.FC = () => {
  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 className="contact-heading">
              Contact <span className="highlight">ME</span>
            </h1>
            <p>I would love to connect</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
