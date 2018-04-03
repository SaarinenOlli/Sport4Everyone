import React, {Component} from "react";
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {Modal, Button} from 'react-bootstrap';

class Navi extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            showlogin: false,
            showregister: false
        };
    }

    //Modaaliboksien piilotus
    handleHide() {
        this.setState({showlogin: false});
        this.setState({showregister: false});
    }

    //Modaaliboksien näyttö sen mukaan onko klikattu log in vai register
    handleSelect(selectedKey) {
        console.log(selectedKey);
        // alert(`selected ${selectedKey}`);
        if (selectedKey === 3.1){
            this.setState({showlogin: true});
        } else if (selectedKey === 3.2){
            this.setState({showregister: true});
        }

    }


    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Sport4Everyone</a>
                         </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight activeKey={3} onSelect={key => this.handleSelect(key)}>
                        <NavDropdown title="Tähän hampurilainen" eventKey={3} id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><Glyphicon glyph="user"/> Log in
                            </MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.2}><Glyphicon glyph="user"/> Register</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                {/*Näytetään login modaaliboksi silloin kun on klikattu login*/}
                <div className="modal-container" style={{height: 10}}>
                    <Modal
                        show={this.state.showlogin}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Log in
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Log in
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                {/*Näytetään register modaaliboksi silloin kun on klikattu login*/}
                <div className="modal-container" style={{height: 10}}>
                    <Modal
                        show={this.state.showregister}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Register
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Register
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>


        );
    }
}

export default Navi;