import React, {Component} from 'react';
import {Panel, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

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
            <Panel.Body>
                Date: {this.props.tieto.pvm}<br/>
                Weight: {this.props.tieto.painoKiloina} kg
            </Panel.Body>
                {/*Ao. kommentoitu pois, jotta ei tule näkyviin käyttäjälle!*/}
                {/*kirjauksen id: {this.props.tieto.painoId}*/}
                <Panel.Body>
                <ButtonToolbar>
                    <ButtonGroup>
                    <Button active onClick={this.poista}>Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                </Panel.Body>
            </Panel>
        );
    }
}

export default Tieto;