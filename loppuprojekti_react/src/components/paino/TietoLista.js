import React, {Component} from 'react';
import Tieto from './Tieto';
import {Panel} from 'react-bootstrap';


//listaa jsonista painotiedot tietoelementeiksi -Olli
class TietoLista extends Component {
    render() {
        var tiedotListana = this.props.tiedot
            .map(function(tieto) {
                return (
                    <Tieto tieto={tieto} poista={this.props.poista}
                           key={tieto.painoId}/>);
        }.bind(this));

        return(
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Weight data</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                {tiedotListana}
                </Panel.Body>
            </Panel>
        );
    }
}

export default TietoLista