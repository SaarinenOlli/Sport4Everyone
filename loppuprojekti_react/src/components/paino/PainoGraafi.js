import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import '../App.css';
window.Chart = require('../../../node_modules/chart.js/src/chart');

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
        const graafidatax = [ {"name":"Weight", "data": graafidata}, {"name":"Weight (AVG)", "data":graafidatakax}];

        return (
            <div>
                <Row>
                    {/*@Renne TÄssä luodaan Chart.js:n avulla kivoja graafeja!*/}

                    <div className="graafi">
                        <LineChart download={true} title="Weight" width="100%" ytitle="Weight" data={graafidatax} />
                    </div>
                </Row>
            </div>

        );
    }

}

export default PainoGraafi;