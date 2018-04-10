import React, {Component} from 'react';
import '../paino/Form.css';

class UintiForm extends Component {
    state = {pvm: '', kesto: '', matka: ''}

    syotaPvm = (event) => {
        this.setState({pvm: event.target.value});
    }

    syotaKesto = (event) => {
        this.setState({kesto: event.target.value});
    }

    syotaMatka = (event) => {
        this.setState({matka: event.target.value});
    }

    ready = (event) => {
        event.preventDefault();
        this.props.uintiTiedotSyotetty(this.state);
        this.setState({pvm: '', kesto: '', matka: ''});
    }

    render() {
        return (
            <form onSubmit={this.ready}>
                Päivämäärä: <input value={this.state.pvm} type="date" required="required"
                                   onChange={this.syotaPvm}/>
                <br/>
                Kesto (min): <input value={this.state.kesto} type="number"
                                    required="required" onChange={this.syotaKesto}/>
                <br/>
                Matka (km): <input value={this.state.matka} type="number"
                                   required="required" onChange={this.syotaMatka}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default UintiForm;