import React, {Component} from 'react';

import './App.css';
import {Image} from 'react-bootstrap';
import swim from '../Resources/swim2.png';
import run from '../Resources/run2.png';
import cycle from '../Resources/bicycle2.png';

var uinti;
var juoksu;
var pyorailu;


class LajiTiedot extends Component{

    render () {
        uinti = this.props.uinti;
        juoksu = this.props.juoksu;
        pyorailu = this.props.pyorailu;

        return (
                <div className="yhteenveto">
                    <Image src={swim} width={"10%"}/> {uinti} times
                    <Image src={run} width={"10%"}/> {juoksu} times
                    <Image src={cycle} width={"10%"}/> {pyorailu} times
                </div>


        )

    }
}
export default LajiTiedot;