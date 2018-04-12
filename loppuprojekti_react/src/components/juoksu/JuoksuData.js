import React, {Component} from 'react';
import JuoksuForm from './JuoksuForm';
import JuoksuTietoLista from "./JuoksuTietoLista";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import LoadingPage from "../LoadingPage";
import firebase from 'firebase';
import KestavyysGraafi from "../KestavyysGraafi";
import LevelGraafi from '../LevelGraafi';
import Kuva from '../Kuva';
import {Col, Row, Image, Panel, Well} from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';

// Juoksudatan käsittely, metodit poistamiseen ja lomakkeen käsittelyyn @Elina

let kayttajanTunnus;
let juoksulaskuri = 0; // Kuinka monta juoksukertaa kirjautuneella käyttäjällä on
var juoksuTotalKm;
var juoksuTotalMin;

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
                juoksulaskuri = Object.keys(json).length;
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

        // Lasketaan JSONista yhteenvetoja juostusta matkasta ja ajasta -Olli ja Heidi

        juoksuTotalKm = 0;
        juoksuTotalMin = 0;
        for (let i = 0 ; i < this.state.juoksudata.length;++i) {
            let tieto = this.state.juoksudata[i];
            juoksuTotalKm = juoksuTotalKm + tieto.matkaKm;
            juoksuTotalMin = juoksuTotalMin + tieto.kestoMin;
        }


        // Määritetään käyttäjän nykyinen level sekä askeleet seuraavalle levelille
        // juoksulaskurin arvon perusteella

        if (juoksulaskuri < 3) {
            levelup = (3 - juoksulaskuri);
            level = 1;
        } else if (juoksulaskuri > 2 && juoksulaskuri < 10) {
            levelup = (10 - juoksulaskuri);
            level = 2;
        } else {
            levelup = (20 - juoksulaskuri);
            level = 3;
        }

        // Sivulle pääsee ainoastaan kirjautuneena

        if (this.user === null) {
            return (
                <LoadingPage/>
            )
        } else {
            return (
                <div className="sivunpohja">
                    <Dialog ref={(el) => {
                        this.dialog = el
                    }}>
                    </Dialog>

                    <nav>
                        <NaviWhenLoggedIn {...this.props}/>
                    </nav>
                    <Row>
                        <Col xs={0} md={4}>
                            <Panel className="paneelivasen">
                                <Panel.Title align="center" className="nimipaneeli">You are logged in as: <br/>
                                    {this.user.displayName} <br/>
                                    {this.user.email}</Panel.Title>
                            </Panel>
                            <Panel className="paneelivasen">
                                <Panel.Body className="kuvapaneeli">
                                    <Kuva laji={'juoksu'} level={level}/>
                                    <br/>
                                    <LevelGraafi laskuri={juoksulaskuri} levelup={levelup} level={level} totalmatka={juoksuTotalKm} totalkesto={juoksuTotalMin}/>
                                    <br/>
                                </Panel.Body>
                                <br/>
                            </Panel>
                        </Col>
                        <Col xs={12} md={8}>
                            <Panel className="paneelioikea">
                                <Panel.Body>
                                    <KestavyysGraafi data={this.state.juoksudata}/>
                                    <JuoksuForm juoksuTiedotSyotetty={this.tiedotSyotetty}/>
                                    <JuoksuTietoLista juoksuTiedot={this.state.juoksudata} poista={this.poistaJuoksu}/>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default JuoksuData;