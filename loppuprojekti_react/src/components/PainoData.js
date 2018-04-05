
import React, {Component} from 'react';
import Form from "./Form";
import TietoLista from "./TietoLista";
import Profiledata from "./Profiledata";

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
                console.dir(json);
                this.setState({data:json})
            }.bind(this));
    }

    tiedotSyotetty = (tiedot) => {
        let paino = {painoKiloina: tiedot.pysty, pvm: tiedot.vaaka};
        fetch('/painot',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paino)
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
                <Profiledata tiedot = {this.state.data}/>

            </div>
        );
    }
}

export default PainoData;