import React, {Component} from 'react';
import PainoData from "./paino/PainoData";
import firebase from "firebase/index";


class Lajikoonti extends Component {

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;
    }

    state = {harjoituskertadata: []}

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

    haeKerratJaPaivita() {
        let kayttajanTunnus = this.user.uid;

        fetch('/laji/' + kayttajanTunnus)
            .then(function (response) {
                if (response.status === 200 || response.status === 304)
                    return response.json();
                else
                    throw new Error(response.statusText);
            }.bind(this))
            .catch(function (error) {
                console.log(error.message)
            })
            .then(function (json) {
                console.dir(json);
                // Haetaan JSON-datan pituuden perusteella käyttäjän liikuntakertojenlukumäärä
                pyoralaskuri = Object.keys(json).length;
                this.setState({harjoituskertadata: json})

            }.bind(this));
    }

    render() {
        return (
            <div>
                <LajiTiedot harjoituskertadata={this.state.harjoituskertadata}/>
            </div>
        )}

}

export default Lajikoonti;