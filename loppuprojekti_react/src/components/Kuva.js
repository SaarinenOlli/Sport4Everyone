import React, {Component} from 'react';
import uinti1 from '../Resources/pelihahmouintilvl2.png';
import uinti2 from '../Resources/pelihahmouintilvl3.png';
import uinti3 from '../Resources/pelihahmouintilvl4.png';
import perus from '../Resources/pelihahmo.png';
import {Image, Col, Row, Carousel} from 'react-bootstrap';


var level;
var laji;
var profiilikuva;

class Kuva extends Component {





    render() {

        level = this.props.level;
        laji = this.props.laji;

            if (level===1) {
                profiilikuva = uinti1;
            } else if (level===2) {
                profiilikuva = uinti2;
            } else if (level===3) {
                profiilikuva = uinti3;
            }

        return (
            <div>
                <Image src={profiilikuva}/>
            </div>
        )
    }

} export default Kuva;