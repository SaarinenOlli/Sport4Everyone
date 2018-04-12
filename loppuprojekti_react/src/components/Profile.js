import React, {Component} from 'react';
import ErrorPageIfNotLoggedIn from "./error/LoadingPage";
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