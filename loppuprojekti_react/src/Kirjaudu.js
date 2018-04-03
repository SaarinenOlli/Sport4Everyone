import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './App.css';

class Kirjaudu extends Component {
    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>One fine body...</Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default Kirjaudu;


