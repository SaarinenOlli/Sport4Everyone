import React, {Component} from "react";
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

class Navi extends Component {

    handleSelect(selectedKey) {
        console.log(selectedKey);
        return "/kirjaudu";
        // alert(`selected ${selectedKey}`);
    }


    render() {
        return (
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#home">Sport4Everyone</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight activeKey={3} onSelect={key => this.handleSelect(key)}>
        <NavDropdown title="Dropdown" eventKey={3} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="/kirjaudu"><Glyphicon glyph="user"/> Log in</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}><Glyphicon glyph="user"/> Register</MenuItem>
        </NavDropdown>
    </Nav>
</Navbar>

    );
    }
}

export default Navi;