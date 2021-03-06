import React, {Component} from 'react';
import {Button, ButtonToolbar, Col, Panel} from 'react-bootstrap';

// Yksittäisen juoksutieto ja mahdollisuus sen poistamisen @Elina

class JuoksuTieto extends Component {

    poistaJuoksu = () => {
        this.props.poistaJuoksu(this.props.juoksuTieto.kestavyysHarjoitusId);
    }

    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Body className="font">
                    <Col md={6} mdPush={10}>
                        <ButtonToolbar pullRight>
                            <Button className="font" onClick={this.poistaJuoksu}>Delete</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <p>
                            Date: {this.props.juoksuTieto.pvm}</p>
                        <p>
                            Duration: {this.props.juoksuTieto.kestoMin} min</p>
                        <p>
                            Distance: {this.props.juoksuTieto.matkaKm} km</p>
                    </Col>
                </Panel.Body>
            </Panel>
        );
    }
}

export default JuoksuTieto;