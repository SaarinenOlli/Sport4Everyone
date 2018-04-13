import React, {Component} from 'react';
import {Panel, Button, ButtonToolbar, Col} from 'react-bootstrap';

// Yksittäisen tiedon tulostusmuoto ja poistonappula. Haetaan UintiTietoListasta @Heidi

class UintiTieto extends Component {

    poistaUinti = () => {
        this.props.poistaUinti(this.props.uintiTieto.kestavyysHarjoitusId);
    }

    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Body className="font">
                    <Col md={6} mdPush={10}>
                        <ButtonToolbar pullRight>
                            <Button className="font" onClick={this.poistaUinti}>Delete</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <p>
                            Date: {this.props.uintiTieto.pvm}</p>
                        <p>
                            Duration: {this.props.uintiTieto.kestoMin} min</p>
                        <p>
                            Distance: {this.props.uintiTieto.matkaKm} km</p>
                    </Col>
                </Panel.Body>
            </Panel>
        );
    }
}

export default UintiTieto;