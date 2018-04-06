import React, {Component} from 'react';

class Tieto extends Component {

    // poista = (event) => {
    //     event.preventDefault();
    //     /* sana paino olettaen, että positetaan paino taulusta tietoa */
    //     fetch('/painot/'+this.props.tieto.painoId,
    //         {method: 'DELETE'})
    //
    // }
    poista = () => {
        this.props.poista(this.props.tieto.painoId);
    }


// pvm = vaaka-akseli
// painoKiloina = pystyakseli
    render() {
        return (
            <li className="Tieto">
                {this.props.tieto.pvm}<br/>
                {this.props.tieto.painoKiloina}<br/>
                {this.props.tieto.painoId}
                <form>
                    <button onClick={this.poista}>Poista</button>
                </form>


            </li>
        );
    }
}

export default Tieto;