import React, {Component} from 'react';

class Tieto extends Component {

    poista = (id) => {

        /* sana paino olettaen, että positetaan paino taulusta tietoa */
        fetch('/paino'+this.props.tieto.id,
            {method: 'DELETE'})

    }


    render() {
        return (
            <li className={Tieto}>
                {this.props.tieto.vaaka}<br/>
                {this.props.tieto.pysty}<br/>
                {this.props.tieto.id}
                <form>
                    <button onClick={this.poista}>Poista</button>
                </form>


            </li>
        );
    }
}

export default Tieto;