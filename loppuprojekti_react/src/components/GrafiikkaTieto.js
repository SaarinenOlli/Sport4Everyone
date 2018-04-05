import React, {Component} from 'react';

class GrafiikkaTieto extends Component {

    render() {
        return (
            <li className="Tieto">
                "{this.props.tieto.pvm}":{this.props.tieto.painoKiloina}
            </li>
        );
    }
}

export default GrafiikkaTieto;