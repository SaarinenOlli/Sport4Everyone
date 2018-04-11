import React, {Component} from 'react';
import Tieto from './Tieto';
import {Panel, Row, Col} from 'react-bootstrap';
import '../../App.css';


//listaa jsonista painotiedot tietoelementeiksi -Olli
class TietoLista extends Component {
    render() {
        var tiedotListana = this.props.tiedot
            .sort((a, b) => a.pvm > b.pvm)
            .map(function(tieto) {
                return (
                    <Tieto tieto={tieto} poista={this.props.poista}
                           key={tieto.painoId}/>);
        }.bind(this));

        return(
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <h4 className="font">Weight data</h4>
                </Panel.Heading>
                <Panel.Body>
                {tiedotListana}
                </Panel.Body>
            </Panel>
        );
    }
}

export default TietoLista