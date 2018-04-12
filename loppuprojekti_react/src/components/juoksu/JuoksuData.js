import React, {Component} from 'react';
import JuoksuForm from './JuoksuForm';
import JuoksuTietoLista from "./JuoksuTietoLista";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import LoadingPage from "../LoadingPage";
import firebase from 'firebase';
import KestavyysGraafi from "../KestavyysGraafi";
import LevelGraafi from '../LevelGraafi';
import Kuva from '../Kuva';

// Juoksudatan käsittely, metodit poistamiseen ja lomakkeen käsittelyyn @Elina

let kayttajanTunnus;
let juoksuLaskuri = 0; // Kuinka monta juoksukertaa kirjautuneella käyttäjällä on

// Apumuuttujat käyttäjän levelien träkkäämiseen
var levelup;
var level;

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
                // Haetaan JSON-datan pituuden perusteella käyttäjän juoksukertojen määrä
                juoksuLaskuri = Object.keys(json).length;
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

        // Määritetään käyttäjän nykyinen level sekä askeleet seuraavalle levelille
        // juoksulaskurin arvon perusteella

        if (juoksuLaskuri < 3) {
            levelup = (3 - juoksuLaskuri);
            level = 1;
        } else if (juoksuLaskuri > 2 && juoksuLaskuri < 10) {
            levelup = (10 - juoksuLaskuri);
            level = 2;
        } else {
            levelup = (20 - juoksuLaskuri);
            level = 3;
        }

        // Sivulle pääsee ainoastaan kirjautuneena
        if (this.user === null) {
            return (
                <LoadingPage/>
            )
        } else {
            return (
                <div>
                    <div>
                        <NaviWhenLoggedIn {...this.props}/>
                    </div>

                    <JuoksuForm juoksuTiedotSyotetty={this.tiedotSyotetty}/>
                    <JuoksuTietoLista juoksuTiedot={this.state.juoksudata} poista={this.poistaJuoksu}/>
                    <KestavyysGraafi data={this.state.juoksudata}/>
                    <Kuva laji={'juoksu'} level={level}/>
                    <LevelGraafi laskuri={juoksuLaskuri} levelup={levelup} level={level}/>
                </div>
            );
        }
    }
}

export default JuoksuData;