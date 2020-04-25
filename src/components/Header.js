import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'


import logo from '../images/logo.png'
import * as actions from '../store/actions/auth'
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>

                        {
                            this.props.isAuthenticated ?

                            <Nav className="mr-lg-2" onClick={this.props.logout}>
                                <Nav.Link>Logout</Nav.Link> 
                            </Nav> 

                        
                            :

                            <Nav className="mr-lg-2">
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>   

                        }
                   

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(actions.logout())
    };
};

  
  export default connect(null, mapDispatchToProps)(Header);