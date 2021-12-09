import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ER from "../Body/ER.jpg"
import levy from "../Body/levy.jpg"
import stephen from "../Body/stephen.jpg"
import jorge from "../Body/jorge.jpg"
import gayle from "../Body/gayle.jpg"
import shashi from "../Body/shashi.jpg"
import jk from "../Body/JK.jpg"
import john from "../Body/john.jpg"


export default class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <Container>
                    <Row>
                    <h3><strong>Featured Writers</strong></h3>
                    </Row>
                    <Row>
                        <Col><img src={ER} className="image1"/><br/>ER Braithwaite</Col>
                        <Col><img src={levy} className="image1"/><br/>Andrea Levy</Col>
                        <Col><img src={stephen} className="image1"/><br/>Stephen King</Col>
                        <Col><img src={jorge} className="image1"/><br/>Jorge Amado</Col>
                    </Row>
                    <Row>
                    <Col><img src={gayle} className="image1"/><br/>Gayle Forman</Col>
                    <Col><img src={shashi} className="image1"/><br/>Shashi Tharoor</Col>
                    <Col><img src={jk} className="image1"/><br/>J.K. Rowling</Col>
                    <Col><img src={john} className="image1"/><br/>John Green</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
