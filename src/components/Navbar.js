import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/es/FormControl";
import {Link} from "react-router-dom";



class HeadNavbar extends Component{


    render() {

        return (
            <Navbar className="navbar-form navbar-fixed-top" bg="light" expand="lg">
                <Navbar.Brand><Link to="">The DJ Hub</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/djs" className="link">DJs</Link></Nav.Link>
                        <Nav.Link><Link to="/gigs" className="link">Gigs</Link></Nav.Link>
                    </Nav>
                    <Nav className="mr-sm-1">
                        <Nav.Link><Link to="" className="link">Sign in</Link></Nav.Link>
                        <Nav.Link><Link to="" className="link">Sign up</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default HeadNavbar;

