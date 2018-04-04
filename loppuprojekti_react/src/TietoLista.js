import React, {Component} from 'react';
import Tieto from './Tieto';

class TietoLista extends Component {
    render() {
        var tiedotListana = this.props.tiedot.map(function(tieto) {
                return (<Tieto tieto={Tieto} key={Tieto.id}/>);
        });



        return(
            <ul className="tietolista">
                {tiedotListana}
            </ul>
        );
    }
}

export default TietoLista