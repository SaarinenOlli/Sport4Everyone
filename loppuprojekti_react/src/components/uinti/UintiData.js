import React, {Component} from 'react';
import UintiForm from './UintiForm';
import UintiTietoLista from "./UintiTietoLista";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import firebase from 'firebase';
import KestavyysGraafi from "../KestavyysGraafi";
import Kuva from '../Kuva';
import LevelGraafi from '../LevelGraafi';
import '../App.css';
import {Col, Row, Image, Panel, Well} from 'react-bootstrap';

// Uintidatan käsittely, poistaminen, listaaminen @Heidi @Elina @Olli

let kayttajanTunnus;
let laskuri = 0; // Kirjautuneen käyttäjän uintikertojen määrä

// Apumuuttujat käyttäjän levelien träkkäämiseen
var levelup;
var level;

class UintiData extends Component {

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;
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
                // Haetaan JSON-datan pituuden perusteella käyttäjän uintikertojen lukumäärä
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

        // Määritetään käyttäjän nykyinen level sekä askeleet seuraavalle levelille
        // laskurin arvon perusteella

        if (laskuri < 3) {
            levelup = (3 - laskuri);
            level = 1;
        } else if (laskuri > 2 && laskuri < 10) {
            levelup = (10 - laskuri);
            level = 2;
        } else {
            levelup = (20 - laskuri);
            level = 3;
        }

        // Sivulle pääsee ainoastaan kirjautuneena
        if (this.user === null) {
            return (
                <ErrorPageIfNotLoggedIn/>
            )
        } else {
            return (
                <div className="sivunpohja">
                <nav className="Navi">
                        <NaviWhenLoggedIn {...this.props}/>
                    </nav>
                    <Row>
                        <Col xs={6} md={4}>
                            <Panel className="paneelivasen">
                                {/*<Panel.Heading>*/}
                                {/*<h4 className="font">Profile</h4>*/}
                                {/*</Panel.Heading>*/}
                                <Panel.Body className="kuva">
                                    <Kuva laji={'uinti'} level={level}/>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={8}>
                            <Panel className="paneelioikea">
                                <Panel.Body>
                                    <KestavyysGraafi data={this.state.uintidata}/>
                                    <LevelGraafi laskuri={laskuri} levelup={levelup} level={level} />
                                    <UintiForm uintiTiedotSyotetty={this.tiedotSyotetty}/>
                                    <UintiTietoLista uintiTiedot={this.state.uintidata} poista={this.poistaUinti}/>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}
export default UintiData;