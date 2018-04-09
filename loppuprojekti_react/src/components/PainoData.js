import React, {Component} from 'react';
import Form from "./Form";
import TietoLista from "./TietoLista";
import Profiledata from "./Profiledata";
import ErrorButton from "./ErrorButton";
import NaviWhenLoggedIn from "../NaviWhenLoggedIn";
//import {auth} from '../FireBase';
import firebase from 'firebase';
import ErrorPageIfNotLoggedIn from "./ErrorPageIfNotLoggedIn";
import Dialog from 'react-bootstrap-dialog';

let kayttajanTunnus;

class PainoData extends Component {

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;//auth.currentUser;
    }

    state = {data: []}

    componentDidMount() {
        if (!this.user)
        firebase.auth().onAuthStateChanged(function (user) {
            if(user) {
                this.user = user;
                this.haePainotJaPaivita();
            } else {
                console.log("EI USERIA")
            }
        }.bind(this));
    }

    // Haetaan painodata tietokannasta by Heidi
    // Virhekäsittelyt by Heidi ja Elina

    haePainotJaPaivita(){
        // if (!this.user)
        //     return;
        let kayttajanTunnus =  this.user.uid;
        console.log(kayttajanTunnus);

        fetch('/painot/' + kayttajanTunnus)
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
                console.dir({data: json});
            }.bind(this));

    }

    // Käyttäjä syöttää painon ja päivämäärän

    tiedotSyotetty = (tiedot) => {
        kayttajanTunnus = this.user.uid;
        let paino = {painoKiloina: tiedot.pysty, pvm: tiedot.vaaka, kayttajaId: this.user.uid};
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

    poistaPaino = (poistettavanId) => {
        fetch('/painot/' + poistettavanId,
                 {method: 'DELETE'})
            .then(function (response) {
                if (response.status < 300) //MIKÄ TÄHÄN OIKEA??
                    this.haePainotJaPaivita();
                else
                    throw new Error(response.statusText);
            }.bind(this))
            .catch(function (err) {
                // virheilmoitus, uusi sivu tai dialogi tai popup tms.
                console.log(err.message)
            });
    }

    render() {

        if (this.user === null) {
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