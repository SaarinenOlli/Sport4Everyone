import React, {Component} from 'react';
import trophy from '../Resources/trophy.png';
import pelihahmo from '../Resources/pelihahmo.png';
import kuvaaja from '../Resources/kuvaaja.png'
import {Image, Col, Row, Carousel} from 'react-bootstrap';
import NaviWhenLoggedIn from "../NaviWhenLoggedIn";
import {auth} from '../FireBase';
import ErrorPageIfNotLoggedIn from "./error/ErrorPageIfNotLoggedIn";
import PainoData from "./paino/PainoData";
import firebase from "firebase/index";

class Profile extends Component {
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

    render() {
        if (this.user === null) {
            return (
                <ErrorPageIfNotLoggedIn/>
            )
        } else {
            return (
               <h1>Pöö</h1>

            );
        }
    }
}

export default Profile;