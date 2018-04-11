import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import chart from '../../chart.png';
import GrafiikkaTieto from '../GrafiikkaTieto';
import PainoData from './PainoData';

import NaviWhenLoggedIn from "../../NaviWhenLoggedIn";
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import Chart from '../../../node_modules/chart.js/src/chart'
window.Chart = require('../../../node_modules/chart.js/src/chart');

//alustetaan Dataa graafia varten, tämä on RAAKADATAA ja korvataan myöhemmin tietokantadatalla @Renne
/*var data = [
    {"name":"Paino", "data": {"2017-01-01": 99, "2017-01-02": 98.5, "2017-01-03": 98.75,"2017-01-04": 98, "2017-01-06": 98,"2017-01-07": 98.2, "2017-01-08": 95, "2017-01-09": 96.5, "2017-01-10": 99, "2017-01-11": 98.5, "2017-01-12": 98.75,"2017-01-13": 98, "2017-01-14": 98,"2017-01-17": 98.2, "2017-01-21": 95, "2017-01-22": 96.5}},
    {"name":"PainoKA", "data": {"2017-01-01": 99.5, "2017-01-02": 99.25, "2017-01-03": 99.12,"2017-01-04": 98.75, "2017-01-06": 98.5,"2017-01-07": 98.4, "2017-01-08": 97.5, "2017-01-09": 97.2}}
];*/
var uintikerrat;
var uintilevel;
var uintilevelup

class PainoGraafi extends Component {
    render() {
       const graafidata = this.props.data.reduce((acc, datum) => { acc[datum.pvm] = datum.painoKiloina; return acc; }, {});

       // Otetaan data talteen KA:n käsittelyä varten
        const data = this.props.data;
        const unparsedMovingAverages = data.map((datum, index, array) => {
            // Määritellään keskiarvon pituus
            const length = 2;
            const lowerBound = Math.max(index - length + 1, 0);
            // Palautetaan taulukko painodataa, jota käytetään keskiarvon laskemiseen
            const sliced = array.slice(lowerBound, index + 1).map(d => d.painoKiloina);
            // Otetaan irti liikkuva keskiarvo
            const averaged = sliced.reduce((a, b) => a + b, 0) / sliced.length;

            return {
                pvm: datum.pvm,
                movingAverage: averaged
            };
        });
        // Muutetaan taulukon data chart.js:n syötävään muotoon!
        const graafidatakax = unparsedMovingAverages.reduce((acc, datum) => {
            acc[datum.pvm] = datum.movingAverage;
            return acc;
        }, {});
        const graafidatax = [ {"name":"Paino", "data": graafidata}, {"name":"PainoKA", "data":graafidatakax}];

        return (
            <div>
                <Row>
                    {/*@Renne TÄssä luodaan Chart.js:n avulla kivoja graafeja!*/}

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <LineChart width="60%" xtitle="Time" ytitle="Weight" data={graafidatax} />
                    </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        {/*<PieChart donut={true} max={100} data={[["Exercises", 9], ["Level Up", 1]]}  />*/}

                    </div>
                </Row>
            </div>

        );
    }

}

export default PainoGraafi;