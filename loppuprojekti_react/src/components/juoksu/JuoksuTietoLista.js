import React, {Component} from 'react';
import JuoksuTieto from './JuoksuTieto';

// Listataan juoksutiedot käyttäjälle @Elina
// LISTAN JÄRJESTÄMINEN?!?!? MIELUUSTI ESIM PÄIVÄMÄÄRÄN MUKAAN

class JuoksuTietoLista extends Component {
    render() {
        var juoksuTiedotListana = this.props.juoksuTiedot
            .map(function(tieto) {
                return (
                    <JuoksuTieto juoksuTieto={tieto} poistaJuoksu={this.props.poista}
                                key={tieto.kestavyysHarjoitusId}/>);
            }.bind(this));

        return(

            <div className="tietolista">
                {juoksuTiedotListana}
            </div>
        );
    }
}

export default JuoksuTietoLista;