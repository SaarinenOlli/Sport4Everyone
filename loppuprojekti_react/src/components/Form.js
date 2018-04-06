import React, {Component} from 'react';
import Navi from "../Navi";


class Form extends Component {

    state = {vaaka: '', pysty: '', kayttajaId: Navi.korvamerkattuuid}

    syotaVaakaTieto = (event) => {
        this.setState({vaaka: event.target.value});
    }

    syotaPystyTieto = (event) => {
        this.setState({pysty: event.target.value});
    }
    ready = (event) => {
        event.preventDefault();
        this.props.tiedotSyotetty(this.state);
        this.setState({vaaka: '', pysty: '', kayttajaId: Navi.korvamerkattuuid});
    }

    /* Tässä versiossa on placeholderit ja päivämääräpalikat paikallaan*/
    render() {
        return (
            <form onSubmit={this.ready}>
                Päivämäärä: <input value={this.state.vaaka} type="date" required="required"
                                   placeholder="vvvv-kk-pp" onChange={this.syotaVaakaTieto}/>
                <br/>
                Paino (kg): <input value={this.state.pysty} type="number" min={0} max={200}
                                   required="required" onChange={this.syotaPystyTieto}/>

                <input type="submit"/>


            </form>
        )
    }
}
export default Form;