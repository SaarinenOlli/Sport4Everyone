import React, {Component} from 'react';
import UintiTieto from './UintiTieto';

// Uintitiedot listalle, joka voidaan tulostaa käyttäjälle @Heidi

class UintiTietoLista extends Component {
    render() {
        var uintiTiedotListana = this.props.uintiTiedot
            .map(function(tieto) {
                return (
                    <UintiTieto uintiTieto={tieto} poistaUinti={this.props.poista}
                                key={tieto.kestavyysHarjoitusId}/>);
        }.bind(this));

        return(

            <div className="tietolista">
                {uintiTiedotListana}
            </div>
        );
    }
}

export default UintiTietoLista;