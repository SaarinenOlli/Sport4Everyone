import React, {Component} from 'react';
import PyoraTieto from './PyoraTieto';

// Uintitiedot listalle, joka voidaan tulostaa käyttäjälle @Heidi

class PyoraTietoLista extends Component {
    render() {
        var pyoraTiedotListana = this.props.pyoraTiedot
            .map(function(tieto) {
                return (
                    <PyoraTieto uintiTieto={tieto} poistaUinti={this.props.poista}
                                key={tieto.kestavyysHarjoitusId}/>);
            }.bind(this));

        return(

            <div className="tietolista">
                {pyoraTiedotListana}
            </div>
        );
    }
}

export default PyoraTietoLista;