import React, {Component} from 'react';
import JuoksuForm from './JuoksuForm';
import JuoksuTietoLista from "./JuoksuTietoLista";
import ProfileNavi from "../../ProfileNavi";
import Profiledata from "../Profiledata";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import firebase from 'firebase';

// Juoksudatan käsittely, metodit poistamiseen ja lomakkeen käsittelyyn @Elina

let kayttajanTunnus;

class JuoksuData extends Component {

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;
    }

    state = {juoksudata: []}

    componentDidMount() {
        if (!this.user)
            firebase.auth().onAuthStateChanged(function (user) {
                if(user) {
                    this.user = user;
                    this.haeJuoksutJaPaivita();
                } else {
                    console.log("EI USERIA")
                }
            }.bind(this));
    }

    //Haetaan juoksudata tietokannasta

    haeJuoksutJaPaivita() {
        let kayttajanTunnus =  this.user.uid;
        console.dir(kayttajanTunnus);

        fetch('/laji/juoksu/' + kayttajanTunnus)
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
                this.setState({juoksudata: json})

            }.bind(this));
    }

    //Otetaan talteen käyttäjän syöttämä juoksudata

    tiedotSyotetty = (tiedot) => {
        kayttajanTunnus = this.user.uid;

        let juoksu = {matkaKm: tiedot.matka, kestoMin: tiedot.kesto,
            pvm: tiedot.pvm, laji: 'juoksu', kayttajaId: this.user.uid};

        fetch('/laji/juoksu', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(juoksu)
        })
            .then(function (response) {
                if (response.status < 300)
                    this.haeJuoksutJaPaivita();
                else
                    throw new Error(response.statusText);

            }.bind(this))
            .catch(function (error) {
                // virheilmoitus, uusi sivu tai dialogi tähän (vinkki Tommilta)
                console.log(error.message)
            });
    }

    // Juoksutiedon poistaminen poista-nappulasta

    poistaJuoksu = (poistettavanId) => {
        fetch('/laji/juoksu/' + poistettavanId,
            {method: 'DELETE'})
            .then(function (response) {
                if (response.status === 204)
                    this.haeJuoksutJaPaivita();
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
                    <JuoksuForm juoksuTiedotSyotetty={this.tiedotSyotetty}/>
                    <JuoksuTietoLista juoksuTiedot={this.state.juoksudata} poista={this.poistaJuoksu}/>
                    <ProfileNavi/>
                    <Profiledata juoksuData={this.state.juoksudata}/>
                </div>
            );
        }
    }

}

export default JuoksuData;