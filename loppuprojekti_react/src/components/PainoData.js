import React, {Component} from 'react';
import Form from "./Form";
import TietoLista from "./TietoLista";
import Profiledata from "./Profiledata";
import ErrorButton from "./ErrorButton";
import NaviWhenLoggedIn from "../NaviWhenLoggedIn";
import {auth} from '../FireBase';
import ErrorPageIfNotLoggedIn from "./ErrorPageIfNotLoggedIn";

// Haetaan painodata tietokannasta by Heidi

class PainoData extends Component {

    state = {data: []}

    componentDidMount() {
        this.haePainotJaPaivita();
    }

    // Virhekäsittelyt bu Heidi ja Elina
    haePainotJaPaivita() {
        fetch('/painot')
            .then(function (response) {
                if (response.status === 200 || response.status === 304)
                    return response.json();
                else
                    throw new Error(response.statusText);

            }.bind(this)) // Mahdollisesti yksi .bind(this) haePainotJaPaivita lopussa saattaa riittää
            .catch(function (err) {
                // virheilmoitus, uusi sivu tai dialogi tai popup tms.
                console.log(err.message)
            })
            .then(function (json) {
                console.dir(json);
                this.setState({data: json})
            }.bind(this));
    }

    tiedotSyotetty = (tiedot) => {
        let paino = {painoKiloina: tiedot.pysty, pvm: tiedot.vaaka, painoid: tiedot.korvamerkattuuid};
        fetch('/painot', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paino)
        })
            .then(function (response) {
                if (response.status < 300)
                    this.haePainotJaPaivita();
                else
                    throw new Error(response.statusText);

            }.bind(this))
            .catch(function (err) {
                // virheilmoitus, uusi sivu tai dialogi tai popup tms.
                console.log(err.message)
            });
    }

    poistaQuote = (poistettavanId) => {
        fetch('/painot/' + poistettavanId,
            {method: 'DELETE'})
            .then(function (response) {
                if (response.status < 300) //MIKÄ TÄHÄN OIKEA??
                    this.haePainotJaPaivita();
                else
                    throw new Error(response.statusText);
            }.bind(this))
            .catch(function (err) {
                console.log(err.message)
            });
    }

    render() {
        const user = auth.currentUser;

        if (user === null) {
            return (
                    <ErrorPageIfNotLoggedIn/>
            )
        } else {
            return (
                <div>
                    <div>
                        <NaviWhenLoggedIn {...this.props}/>
                    </div>
                    <Form tiedotSyotetty={this.tiedotSyotetty}/>
                    <TietoLista tiedot={this.state.data} poista={this.poistaQuote}/>
                    <Profiledata data={this.state.data}/>
                    <ErrorButton/>
                </div>
            );
        }
    }
}

export default PainoData;