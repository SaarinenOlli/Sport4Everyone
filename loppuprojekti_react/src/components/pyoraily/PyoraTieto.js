import React, {Component} from 'react';
import {Panel, Button, ButtonToolbar, Col} from 'react-bootstrap';

// Yksittäisen tiedon tulostusmuoto ja poistonappula. Haetaan UintiTietoListasta @Heidi

class PyoraTieto extends Component {

    poistaPyora = () => {
        this.props.poistaPyora(this.props.pyoraTieto.kestavyysHarjoitusId);
    }

    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Body className="font">
                    <Col md={6} mdPush={10}>
                        <ButtonToolbar pullRight>
                            <Button className="font" onClick={this.poistaPyora}>Delete</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <p>
                            Date: {this.props.pyoraTieto.pvm}</p>
                        <p>
                            Duration: {this.props.pyoraTieto.kestoMin} min</p>
                        <p>
                            Distance: {this.props.pyoraTieto.matkaKm} km</p>
                    </Col>
                </Panel.Body>
            </Panel>
        );
    }
}

export default PyoraTieto;