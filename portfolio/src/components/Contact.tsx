import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Mailbox from "./Mailbox"; 
import "../../Contact.css";

const Contact: React.FC = () => {
  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="contact-heading">
              Contact  <span className="highlight">ME</span>
            </h1>
            <Form>
              {/* ...form fields as before... */}
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
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Mailbox />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
