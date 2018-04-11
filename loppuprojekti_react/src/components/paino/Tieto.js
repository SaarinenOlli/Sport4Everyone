import React, {Component} from 'react';
import {Panel, Button, ButtonToolbar, ButtonGroup, Col} from 'react-bootstrap';
import '../../App.css';

class Tieto extends Component {

    // poista = (event) => {
    //     event.preventDefault();
    //     /* sana paino olettaen, että positetaan paino taulusta tietoa */
    //     fetch('/painot/'+this.props.tieto.painoId,
    //         {method: 'DELETE'})
    //
    // }
    poista = () => {
        this.props.poista(this.props.tieto.painoId);
    }

    // yksittäisen painotiedon esittävä elementti, jossa nappi itsensä poistamista varten -Olli
// pvm = vaaka-akseli
// painoKiloina = pystyakseli
    render() {
        return (

            <Panel bsStyle="primary">
            <Panel.Body className="font">
                <Col md={6} mdPush={10}>
                    <ButtonToolbar pullRight>
                        <Button className="font" onClick={this.poista}>Delete</Button>
                    </ButtonToolbar>
                {/*Ao. kommentoitu pois, jotta ei tule näkyviin käyttäjälle!*/}
                {/*kirjauksen id: {this.props.tieto.painoId}*/}
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