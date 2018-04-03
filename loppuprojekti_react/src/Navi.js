import React, {Component} from "react";
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

class Navi extends Component {
    render() {
        return (
<Navbar>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#home">Training app</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Log in</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}>Register</MenuItem>
        </NavDropdown>
    </Nav>
</Navbar>

    );
    }
}

export default Navi;