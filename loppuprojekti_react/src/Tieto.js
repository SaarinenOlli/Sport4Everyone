import React, {Component} from 'react';

class Tieto extends Component {

    poista = (id) => {

        fetch('/painot'+this.props.tieto.id,
            {method: 'DELETE'})

    }


    render() {
        return (
            <li>
                {this.props.quote.vaaka}<br/>
                {this.props.quote.pysty}<br/>
                {this.props.quote.id}
                <form>
                    <button onClick={this.poista}>Poista</button>
                </form>


            </li>
        );
    }
}

export default Tieto;