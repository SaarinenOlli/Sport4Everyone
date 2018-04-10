import React, {Component} from 'react';
import PyoraTieto from './PyoraTieto';

// Uintitiedot listalle, joka voidaan tulostaa käyttäjälle @Heidi

class PyoraTietoLista extends Component {
    render() {
        var pyoraTiedotListana = this.props.pyoraTiedot
            .sort((a, b) => a.pvm > b.pvm)
            .map(function(tieto) {
                return (
                    <PyoraTieto pyoraTieto={tieto} poistaPyora={this.props.poista}
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