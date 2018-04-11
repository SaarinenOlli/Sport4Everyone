import React, {Component} from 'react';
import Form from "./Form";
import TietoLista from "./TietoLista";
import PainoGraafi from "./PainoGraafi";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import firebase from 'firebase';
import pelihahmo from '../../Resources/pelihahmo.png';
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import {Col, Row, Image, Panel, Well} from 'react-bootstrap';
import '../../App.css';

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
        let paino = {painoKiloina: tiedot.paino, pvm: tiedot.pvm, kayttajaId: this.user.uid};
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
                if (response.status === 204)
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
        if (this.user) {
            return (
                <div>
                    <nav className="Navi">
                        <NaviWhenLoggedIn {...this.props}/>
                    </nav>
                    <Row>
                        <Col xs={6} md={4}>
                            <Panel className="paneelivasen">
                                <Panel.Heading>
                                    <h4 className="font">Profile</h4>
                                </Panel.Heading>
                                <Panel.Body>
                                    <img className="kuva" src={pelihahmo}/>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={8}>
                        <Panel className="paneelioikea">
                            <Panel.Body>
                                    <PainoGraafi data={this.state.data}/>
                                <br/>
                                <br/>
                                <br/>
                                <Form tiedotSyotetty={this.tiedotSyotetty}/>
                                <TietoLista tiedot={this.state.data} poista={this.poistaPaino}/>
                            </Panel.Body>
                        </Panel>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
            <ErrorPageIfNotLoggedIn/>
            );
        }
    }
}

//Renderiin korjattu poistaPaino (ennen poistQuote) maanantai ap @Heidi

export default PainoData;