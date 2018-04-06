import React, {Component} from 'react';

class GrafiikkaTieto extends Component {

    render() {
        return (
                <p>"{this.props.tieto.pvm}":{this.props.tieto.painoKiloina},</p>

        );
    }
}

export default GrafiikkaTieto;