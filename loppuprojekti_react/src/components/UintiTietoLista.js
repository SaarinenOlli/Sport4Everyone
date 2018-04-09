import React, {Component} from 'react';
import KestavyysTieto from './UintiTieto';


class UintiTietoLista extends Component {
    render() {
        var uintiTiedotListana = this.props.uintiTiedot
            .map(function(tieto) {
                return (
                    <UintiTieto uintiTieto={tieto} poistaUintiTieto={this.props.poistaUinti}
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