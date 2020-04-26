import React, { Component } from 'react'
import {Nav, Container, Row, Col} from 'react-bootstrap'


class Footer extends Component {
    render() {
        return (
            <>
            <Nav className="fixed-bottom navbar-dark bg-dark" >
            <br></br>
            <Container className="mt-2">
                <Row 
                    style={{
                        color: "grey",
                        height: "90px",
                        align: "center"
                }}>
                    <Col xs="6" sm="4">
                        Contact us <br></br>
                        kbtu@kbtu.kz
                    </Col>
                    <span className="block-example border-right border-light"
                        style={{
                            height: "75px"
                        }}>
                    </span>
                    <Col xs="6" sm="4">
                        Address <br></br>
                        Tole bi, 59
                    </Col>
                    <span className="block-example border-right border-light"
                        style={{
                            height: "75px"
                        }}>
                    </span>                   
                    <Col md="auto">
                        You may like most popular tools and apps
                    </Col>            
                </Row>
            </Container>
            </Nav>
            </>
        )
    }
}

export default Footer;
