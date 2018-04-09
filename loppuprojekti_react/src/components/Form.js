import React, {Component} from 'react';
import Navi from "../Navi";
import './Form.css';


//Formi painotietojen syöttämistä varten -Olli
class Form extends Component {

    state = {vaaka: '', pysty: ''}

    syotaVaakaTieto = (event) => {
        this.setState({vaaka: event.target.value});
    }

    syotaPystyTieto = (event) => {
        this.setState({pysty: event.target.value});
    }
    ready = (event) => {
        event.preventDefault();
        this.props.tiedotSyotetty(this.state);
        this.setState({vaaka: '', pysty: ''});
    }

    /* Tässä versiossa on placeholderit ja päivämääräpalikat paikallaan*/
    render() {
        return (
            <form onSubmit={this.ready}>
                Päivämäärä: <input value={this.state.vaaka} type="date" required="required"
                                   placeholder="vvvv-kk-pp" onChange={this.syotaVaakaTieto}/>
                <br/>
                Paino (kg): <input value={this.state.pysty} type="number" min={0} max={200} step={0.01}
                                   required="required" onChange={this.syotaPystyTieto}/>

                <input type="submit"/>


            </form>
        )
    }
}
export default Form;