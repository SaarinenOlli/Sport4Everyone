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
            <div className="Tieto">
                päiväys: {this.props.tieto.pvm}<br/>
                paino: {this.props.tieto.painoKiloina} kg<br/>
                kirjauksen id: {this.props.tieto.painoId}
                <form>
                    <button onClick={this.poista}>Poista</button>
                </form>


            </div>
        );
    }
}

export default Tieto;