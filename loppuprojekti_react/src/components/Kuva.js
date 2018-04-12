import React, {Component} from 'react';
import perus from '../Resources/pelihahmo.png';
import uinti1 from '../Resources/pelihahmouintilvl2.png';
import uinti2 from '../Resources/pelihahmouintilvl3.png';
import uinti3 from '../Resources/pelihahmouintilvl4.png';
import juoksu1 from '../Resources/pelihahmojuoksijalvl1.png';
import pyora1 from  '../Resources/pelihahmopyoralvl1.png';
import {Image} from 'react-bootstrap';
import './App.css';

// Elementti lajin ja levelin mukaisen "profiilikuvan" näyttämiseen
// Toimii kaikkien lajien kanssa, mutta uinti toistaiseksi ainoa laji, jossa hahmo kehittyy
// @Olli @Elina

var level;
var laji;
var profiilikuva;

class Kuva extends Component {

    render() {

        level = this.props.level;
        laji = this.props.laji;

        if (laji === 'uinti') {
            if (level === 1) {
                profiilikuva = uinti1;
            } else if (level === 2) {
                profiilikuva = uinti2;
            } else if (level === 3) {
                profiilikuva = uinti3;
            }
        } else if (laji === 'juoksu') {
            profiilikuva = juoksu1;
        } else if (laji === 'pyoraily') {
            profiilikuva = pyora1;
        } else {
            profiilikuva = perus;
        }

        return (
            <div>
                <Image id="levelkuva" src={profiilikuva}/>
            </div>
        )
    }

} export default Kuva;