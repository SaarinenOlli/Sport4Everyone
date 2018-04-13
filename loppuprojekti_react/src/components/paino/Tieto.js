import React, {Component} from 'react';
import {Panel, Button, ButtonToolbar, Col} from 'react-bootstrap';
import '../App.css';

class Tieto extends Component {

    poista = () => {
        this.props.poista(this.props.tieto.painoId);
    }

    // yksittäisen painotiedon esittävä elementti, jossa nappi itsensä poistamista varten -Olli
    render() {
        return (

            <Panel bsStyle="primary">
            <Panel.Body className="font">
                <Col md={6} mdPush={10}>
                    <ButtonToolbar pullRight>
                        <Button className="font" onClick={this.poista}>Delete</Button>
                    </ButtonToolbar>
                </Col>
                <Col md={6} mdPull={6}>
                    <p>
                        Date: {this.props.tieto.pvm}</p>
                    <p>
                        Weight: {this.props.tieto.painoKiloina} kg</p>
                </Col>
                </Panel.Body>
            </Panel>
        );
    }
}

export default Tieto;