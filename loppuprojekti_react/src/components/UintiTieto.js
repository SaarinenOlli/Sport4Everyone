import React, {Component} from 'react';


class UintiTieto extends Component {

    poistaUinti = () => {
        this.props.poistaUinti(this.props.uintiTieto.kestavyysHarjoitusId);
    }

    render() {
        return (
            <div className="Tieto">
                päiväys: {this.props.uintiTieto.pvm}<br/>
                kesto: {this.props.uintiTieto.kestoMin} min<br/>
                matka: {this.props.tieto.matkaKm} km<br/>
                kirjauksen id: {this.props.tieto.kestavyysHarjoitusId}
                <form>
                    <button onClick={this.poistaUinti}>Poista</button>
                </form>


            </div>
        );
    }
}

export default UintiTieto;