import React, {Component} from 'react';

import './App.css';
import {Image} from 'react-bootstrap';
import blocks from '../Resources/blocks.png'
import swim from '../Resources/swim2.png';
import run from '../Resources/run2.png';
import cycle from '../Resources/bicycle2.png';
import firebase from 'firebase';

class LajiTiedot extends Component{

    state = {lukumaara: 0}

    constructor(props) {
        super(props);
        this.user = firebase.auth().currentUser;
    }

    haeLuku() {
        let kayttajanTunnus =  this.user.uid;

        fetch('/laji/' + kayttajanTunnus)
            .then(function (response) {
                if (response.status === 200 || response.status === 304)
                    return response.json();
                else
                    throw new Error(response.statusText);

            }.bind(this))
            .catch(function (err) {
                console.log(err.message)
            })
            .then(function (luku) {
                this.setState({lukumaara: luku});
            }.bind(this));
    }

    render () {
        this.haeLuku();

        return (
                <div className="yhteenveto">
                    <Image src={blocks} width={"10%"}/> {this.state.lukumaara} times
                </div>
        )
    }
}
export default LajiTiedot;