import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import Top from "./Components/Body/Top";
import Middle from "./Components/Body/Middle";
import Bottom from "./Components/Body/Bottom";
import { Container, Row } from "react-bootstrap";
//import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <Row>
          <Top />
        </Row>
        <Row>
          <Middle />
        </Row>
        <Row>
          <Bottom />
        </Row>
      </Container>
    </div>
  );
}

export default App;
