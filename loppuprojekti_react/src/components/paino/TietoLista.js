import React, {Component} from 'react';
import Tieto from './Tieto';


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

            <div className="tietolista">
                {tiedotListana}
            </div>
        );
    }
}

export default TietoLista