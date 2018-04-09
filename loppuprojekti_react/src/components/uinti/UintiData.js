import React, {Component} from 'react';
import UintiForm from './UintiForm';
import UintiTietoLista from "./UintiTietoLista";
import ProfileNavi from "../../ProfileNavi";
import Profiledata from "../Profiledata";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import firebase from 'firebase';

let kayttajanTunnus;

class UintiData extends Component {

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
                    this.haeUinnitJaPaivita();
                } else {
                    console.log("EI USERIA")
                }
            }.bind(this));
    }

    //Haetaan uintidata tietokannasta @Heidi

    haeUinnitJaPaivita() {
        let kayttajanTunnus =  this.user.uid;
        console.dir(kayttajanTunnus);

        fetch('/laji/uinti/' + kayttajanTunnus)
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
                this.setState({data: json})

            }.bind(this));
    }

    //Otetaan talteen käyttäjän syöttämä uintidata @Heidi

    tiedotSyotetty = (tiedot) => {
        kayttajanTunnus = this.user.uid;

        let uinti = {matkaKm: tiedot.matka, kestoMin: tiedot.kesto,
            pvm: tiedot.pvm, laji: 'uinti', kayttajaId: this.user.uid};

        fetch('/laji/uinti', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(uinti)
        })
            .then(function (response) {
                if (response.status < 300)
                    this.haeUinnitJaPaivita();
                else
                    throw new Error(response.statusText);

            }.bind(this))
            .catch(function (error) {
                // virheilmoitus, uusi sivu tai dialogi tähän (vinkki Tommilta)
                console.log(error.message)
            });
    }

    //Uintitiedon poistaminen poista-nappulasta @Heidi

    poistaUinti = (poistettavanId) => {
        fetch('/laji/uinti/' + poistettavanId,
            {method: 'DELETE'})
            .then(function (response) {
                if (response.status === 204)
                    this.haeUinnitJaPaivita();
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
                    <UintiForm uintiTiedotSyotetty={this.tiedotSyotetty}/>
                    <UintiTietoLista uintiTiedot={this.state.data} poista={this.poistaUinti}/>
                    <ProfileNavi/>
                    <Profiledata uintiData={this.state.data}/>
                </div>
            );
        }
    }

}

export default UintiData;