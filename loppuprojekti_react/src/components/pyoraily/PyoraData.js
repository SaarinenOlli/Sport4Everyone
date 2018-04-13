import React, {Component} from 'react';
import PyoraForm from './PyoraForm';
import PyoraTietoLista from './PyoraTietoLista';
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import LoadingPage from "../LoadingPage";
import firebase from 'firebase';
import KestavyysGraafi from "../KestavyysGraafi";
import LevelGraafi from '../LevelGraafi';
import Kuva from '../Kuva';
import {Col, Row, Panel} from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';

// Pyöräilydatan käsittely, poistaminen ja listaaminen @Heidi @Elina

let kayttajanTunnus;
let pyoralaskuri = 0; // Kirjautuneen käyttäjän pyöräilykertojen määrä
var pyoraTotalKm;
var pyoraTotalMin;

// Apumuuttujat käyttäjän levelien träkkäämiseen
var levelup;
var level;



class PyoraData extends Component {

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;
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
                // Haetaan JSON-datan pituuden perusteella käyttäjän pyöräilykertojen lukumäärä
                pyoralaskuri = Object.keys(json).length;
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

    //Pyöräilytiedon poistaminen poista-nappulasta @Heidi

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

        // Lasketaan JSONista yhteenvetoja pyöräillystä matkasta ja ajasta -Olli ja Heidi

        pyoraTotalKm = 0;
        pyoraTotalMin = 0;
        for (let i = 0 ; i < this.state.pyoradata.length;++i) {
            let tieto = this.state.pyoradata[i];
            pyoraTotalKm = pyoraTotalKm + tieto.matkaKm;
            pyoraTotalMin = pyoraTotalMin + tieto.kestoMin;
        }

        // Määritetään käyttäjän nykyinen level sekä askeleet seuraavalle levelille
        // laskurin arvon perusteella

        if (pyoralaskuri < 3) {
            levelup = (3 - pyoralaskuri);
            level = 1;
        } else if (pyoralaskuri > 2 && pyoralaskuri < 10) {
            levelup = (10 - pyoralaskuri);
            level = 2;
        } else {
            levelup = (20 - pyoralaskuri);
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
                            <Panel className="paneelivasen tietopaneeli" >
                                <Panel.Title align="center" className="nimipaneeli">You are logged in as: <br/>
                                    {this.user.displayName} <br/>
                                    {this.user.email}</Panel.Title>
                            </Panel>
                            <Panel className="paneelivasen">
                                <Panel.Body className="kuvapaneeli">
                                    <Kuva laji={'pyoraily'} level={level}/>
                                    <br/>
                                    <LevelGraafi laskuri={pyoralaskuri} levelup={levelup} level={level} totalmatka={parseFloat(pyoraTotalKm).toFixed(2)} totalkesto={pyoraTotalMin}/>
                                    <br/>
                                </Panel.Body>
                                <br/>
                            </Panel>
                        </Col>
                        <Col xs={12} md={8}>
                            <Panel className="paneelioikea">
                                <Panel.Body>
                                    <KestavyysGraafi data={this.state.pyoradata}/>
                                    <PyoraForm pyoraTiedotSyotetty={this.tiedotSyotetty}/>
                                    <PyoraTietoLista pyoraTiedot={this.state.pyoradata} poista={this.poistaPyora}/>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}
export default PyoraData;