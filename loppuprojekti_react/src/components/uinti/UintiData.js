import React, {Component} from 'react';
import UintiForm from './UintiForm';
import UintiTietoLista from "./UintiTietoLista";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import firebase from 'firebase';
import KestavyysGraafi from "../KestavyysGraafi";
import Kuva from '../Kuva';
import LevelGraafi from '../LevelGraafi';

let kayttajanTunnus;
let laskuri;
var levelup;
var level;
var laji;

class UintiData extends Component {




constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;//auth.currentUser;
    }

    state = {uintidata: []}

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
                laskuri = Object.keys(json).length;
                this.setState({uintidata: json})

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



        if (laskuri < 3) {
            levelup = (3-laskuri);
            level = 1;} else if (laskuri >2 && laskuri <10) {
            levelup = (10-laskuri);
            level = 2; } else {
            levelup = (20-laskuri);
            level = 3;}

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
                    <UintiTietoLista uintiTiedot={this.state.uintidata} poista={this.poistaUinti}/>
                    <KestavyysGraafi data={this.state.uintidata}/>
                    <div>
                        <Kuva laji={1} level={level}/>
                    </div>
                    <div>
                        <LevelGraafi laskuri={laskuri} levelup={levelup} level={level} />
                    </div>
                </div>
            );
        }
    }
}

export default UintiData;