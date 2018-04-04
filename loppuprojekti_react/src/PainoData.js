import React, {Component} from 'react';
import Form from "./Form";
import TietoLista from "./TietoLista";

// Haetaan painodata tietokannasta by Heidi

class PainoData extends Component {

    state = {data:[]}
    componentDidMount(){
        this.haePainotJaPaivita();
    }

    haePainotJaPaivita(){
        fetch('/painot')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                this.setState({data:json})
            }.bind(this));
    }

    tiedotSyotetty = (tiedot) => {
        fetch('/painot',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tiedot)
        })
            .then(function (response) {
                this.haePainotJaPaivita();

            }.bind(this));
    }

    render() {
        return (
            <div>
                <Form tiedotSyotetty = {this.tiedotSyotetty}/>
                <TietoLista tiedot = {this.state.data}/>
            </div>
        );
    }
}

export default PainoData;