import React, {Component} from 'react';

// Yksittäisen juoksutieto ja mahdollisuus sen poistamisen @Elina

class JuoksuTieto extends Component {

    poistaJuoksu = () => {
        this.props.poistaJuoksu(this.props.juoksuTieto.kestavyysHarjoitusId);
    }

    render() {
        return (
            <div className="Tieto">
                päiväys: {this.props.juoksuTieto.pvm}<br/>
                kesto: {this.props.juoksuTieto.kestoMin} min<br/>
                matka: {this.props.juoksuTieto.matkaKm} km<br/>
                kirjauksen id: {this.props.juoksuTieto.kestavyysHarjoitusId}
                <form>
                    <button onClick={this.poistaJuoksu}>Poista</button>
                </form>


            </div>
        );
    }
}

export default JuoksuTieto;