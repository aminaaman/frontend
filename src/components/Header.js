import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../images/logo.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Login from '../pages/Login';

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
                        <Nav className="mr-lg-2">
                            <Nav.Link href="/login">Login/Register</Nav.Link>
                        </Nav>                     

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/login" component={Login}/>

                </Switch>
            </Router>
            </>
        )
    }
}
export default Header;