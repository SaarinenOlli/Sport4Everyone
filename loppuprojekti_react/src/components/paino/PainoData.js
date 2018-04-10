import React, {Component} from 'react';
import Form from "./Form";
import TietoLista from "./TietoLista";
import PainoGraafi from "./PainoGraafi";
import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import firebase from 'firebase';
import pelihahmo from '../../Resources/pelihahmo.png';
import ErrorPageIfNotLoggedIn from "../error/ErrorPageIfNotLoggedIn";
import {Col, Row, Image, Panel, Well} from 'react-bootstrap';

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
        if (this.user === null) {
            return (
                <ErrorPageIfNotLoggedIn/>
            )
        } else {
            return (
                <div>
                    <nav className="Navi">
                        <NaviWhenLoggedIn {...this.props}/>
                    </nav>
                    <Row>
                        <Col xs={0} md={4}/>
                        <Col xs={12} md={4}>
                            <h1 align="middle"></h1>
                        </Col>
                        <Col xs={0} md={4}/>
                    </Row>
                    <Row>
                        <Col xs={5} md={5}>
                            <Image src={pelihahmo} circle className={"pull-right"}/>
                        </Col>
                        <Col xs={0} md={2}/>
                        <Panel>
                            <Panel.Body>
                                {/*ao. on nopea tee-se-itse ratkaisu, korjataan nätimmäksi jos ehtii @Tiina*/}
                                <br/> <br/> <br/> <br/>
                        <Col xs={5} md={5}>
                            <PainoGraafi data={this.state.data}/>
                        </Col>
                            </Panel.Body>
                        </Panel>
                    </Row>
                    <br/>
                    <Panel>
                        <Panel.Body>
                            <Row>
                                <Col xs={0} md={1}/>
                                <Col xs={5} md={5}>
                                    <Form tiedotSyotetty={this.tiedotSyotetty}/>
                                </Col>
                                <Col xs={5} md={5}>
                                    <TietoLista tiedot={this.state.data} poista={this.poistaPaino}/>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        }
    }
}

//Renderiin korjattu poistaPaino (ennen poistQuote) maanantai ap @Heidi

export default PainoData;