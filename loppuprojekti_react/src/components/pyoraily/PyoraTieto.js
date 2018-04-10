import React, {Component} from 'react';

// Yksittäisen tiedon tulostusmuoto ja poistonappula. Haetaan UintiTietoListasta @Heidi

class PyoraTieto extends Component {

    poistaPyora = () => {
        this.props.poistaPyora(this.props.pyoraTieto.kestavyysHarjoitusId);
    }

    render() {
        return (
            <div className="Tieto">
                päiväys: {this.props.pyoraTieto.pvm}<br/>
                kesto: {this.props.pyoraTieto.kestoMin} min<br/>
                matka: {this.props.pyoraTieto.matkaKm} km<br/>
                kirjauksen id: {this.props.pyoraTieto.kestavyysHarjoitusId}
                <form>
                    <button onClick={this.poistaPyora}>Poista</button>
                </form>


            </div>
        );
    }
}

export default PyoraTieto;