import React, { Component } from "react";
import { Nav, Navbar, Container, Form, FormControl } from "react-bootstrap";
import Facebook from "./Facebook";
import Login from "./Login";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawersome";
//import { faSearch } "@fortawesome/free-solid-svg-icons";
export default class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="navv">
              BookPod.
            </Navbar.Brand>
            <Nav className="asd">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
              <Nav.Link href="#podcasts">Podcasts</Nav.Link>
              <Form
                className="end-0"
                style={{ marginLeft: "70px", paddingLeft: "20px" }}
              >
                <FormControl
                  className="qwe"
                  type="search"
                  placeholder="Search..."
                />
              </Form>
            </Nav>
          </Container>
          <Login />
          <Facebook />
        </Navbar>
      </div>
    );
  }
}
