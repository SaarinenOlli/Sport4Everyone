import React, {Component} from 'react';
import PyoraForm from './PyoraForm';
import PyoraTietoLista from './PyoraTietoLista';
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import firebase from 'firebase';
import KestavyysGraafi from "../KestavyysGraafi";

let kayttajanTunnus;

class PyoraData extends Component {

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;//auth.currentUser;
    }

    state = {pyoradata: []}

    componentDidMount() {
        if (!this.user)
            firebase.auth().onAuthStateChanged(function (user) {
                if(user) {
                    this.user = user;
                    this.haePyorailytJaPaivita();
                } else {
                    console.log("EI USERIA")
                }
            }.bind(this));
    }

    //Haetaan pyörädata tietokannasta @HEidi

    haePyorailytJaPaivita() {
        let kayttajanTunnus = this.user.uid;

        fetch('/laji/pyoraily/' + kayttajanTunnus)
            .then(function (response) {
                if (response.status === 200 || response.status === 304)
                    return response.json();
                else
                    throw new Error(response.statusText);
            }.bind(this))
            .catch(function (error) {
                // virheilmoitus, uusi sivu tai dialogi tähän (vinkki Tommilta)
                console.log(error.message)
            })
            .then(function (json) {
                console.dir(json);
                this.setState({pyoradata: json})

            }.bind(this));
    }

    //Otetaan talteen käyttäjän syöttämä pyöräilydata @Heidi

    tiedotSyotetty = (tiedot) => {
        kayttajanTunnus = this.user.uid;

        let pyora = {matkaKm: tiedot.matka, kestoMin: tiedot.kesto,
            pvm: tiedot.pvm, laji: 'pyöräily', kayttajaId: this.user.uid};

        fetch('/laji/pyoraily', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pyora)
        })
            .then(function (response) {
                if (response.status < 300)
                    this.haePyorailytJaPaivita();
                else
                    throw new Error(response.statusText);

            }.bind(this))
            .catch(function (error) {
                // virheilmoitus, uusi sivu tai dialogi tähän (vinkki Tommilta)
                console.log(error.message)
            });
    }

    //Pyötäilytiedon poistaminen poista-nappulasta @Heidi

    poistaPyora = (poistettavanId) => {
        fetch('/laji/pyoraily/' + poistettavanId,
            {method: 'DELETE'})
            .then(function (response) {
                if (response.status === 204)
                    this.haePyorailytJaPaivita();
                else
                    throw new Error(response.statusText);
            }.bind(this))
            .catch(function (error) {
                // virheilmoitus, uusi sivu tai dialogi tähän (vinkki Tommilta)
                console.log(error.message)
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
                    <PyoraForm pyoraTiedotSyotetty={this.tiedotSyotetty}/>
                    <PyoraTietoLista pyoraTiedot={this.state.pyoradata} poista={this.poistaPyora}/>
                    <KestavyysGraafi pyoraData={this.state.pyoradata}/>
                </div>
            );
        }

    }
}


export default PyoraData;