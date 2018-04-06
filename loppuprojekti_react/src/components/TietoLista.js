import React, {Component} from 'react';
import Tieto from './Tieto';

class TietoLista extends Component {
    render() {
        var tiedotListana = this.props.tiedot
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