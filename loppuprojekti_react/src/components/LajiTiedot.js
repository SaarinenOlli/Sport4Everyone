import React, {Component} from 'react';

import './App.css';
import {Image} from 'react-bootstrap';
import blocks from '../Resources/blocks.png'
import swim from '../Resources/swim2.png';
import run from '../Resources/run2.png';
import cycle from '../Resources/bicycle2.png';

var liikuntaKerrat;



class LajiTiedot extends Component{

    render () {
        liikuntaKerrat = this.props.harjoituskertadatat;

        return (
                <div className="yhteenveto">
                    <Image src={blocks} width={"10%"}/> {liikuntaKerrat} times
                </div>


        )

    }
}
export default LajiTiedot;