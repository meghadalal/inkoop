import React, { Component } from "react";
import IMG from "../Body/image.jpg";
import { Container, Row, Col, Form } from "react-bootstrap";
export default class Middle extends Component {
  render() {
    return (
      <div className="my">
        <Container>
          <Row>
            <Col>
              <img src={IMG} className="image" />
            </Col>
            <Col>
              <Form className="lorem">
                <div className="lorem">
                  <h5>LOREM IPSUM</h5>
                  <h2><strong>Lorem ipsum <br/>dolor sit amet</strong></h2>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua.
                  </h6>
                </div>
                {/* <i class="fab fa-twitter"></i><i class="fab fa-facebook-square"></i> */}
              </Form>
              {/* <i className="fa fa-fw fa-suitcase"></i> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
