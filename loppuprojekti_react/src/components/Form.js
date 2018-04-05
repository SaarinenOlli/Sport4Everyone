import React, {Component} from 'react';


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

    render() {
        return (
            <form onSubmit={this.ready}>
                Päivämäärä: <input value={this.state.vaaka} onChange={this.syotaVaakaTieto}/>
                <br/>
                Paino: <input value={this.state.pysty} onChange={this.syotaPystyTieto}/>
                < br/>
                < input type="submit"/>
            </form>);
    }
}


export default Form;
