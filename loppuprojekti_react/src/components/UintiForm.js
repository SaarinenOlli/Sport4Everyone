import React, {Component} from 'react';
import './Form.css';

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
        this.props.tiedotSyotetty(this.state);
        this.setState({pvm: '', kesto: '', matka: ''});
    }

    render() {
        return (
            <form onSubmit={this.ready}>
                Päivämäärä: <input value={this.state.pvm} type="date" required="required"
                                   onChange={this.syotaPvm}/>
                <br/>
                Kesto (min): <input value={this.state.kesto} type="number" min={0} step={0.01}
                                    required="required" onChange={this.syotaKesto}/>
                <br/>
                Matka (km): <input value={this.state.matka} type="number" min={0} step={0.01}
                                   required="required" onChange={this.syotaMatka}/>
            </form>
        )
    }
}

export default UintiForm;