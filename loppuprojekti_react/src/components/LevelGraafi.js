import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import './App.css';
import {Image} from 'react-bootstrap';
import blocks from '../Resources/blocks.png';
import kokonaiskesto from '../Resources/quarter-of-an-hour.png';
import kokonaismatka from '../Resources/school-rule.png';

// Komponentti käyttäjän tämän hetkisen levelin näyttämiseen donitsina
// Toimii kaikkien lajien kanssa
// @Olli @Elina

var levelup;
var laskuri;

class LevelGraafi extends Component{

    render () {
        levelup = this.props.levelup;
        laskuri = this.props.laskuri;

        // Donitsin yläpuolella näytetään lajisivun mukaan kyseisen lajin suorituskerrat,
        // kokonaisaika ja -matka @Olli @Heidi
        return (
            <div>
                <div className="yhteenveto">
                    <Image src={blocks} width={"10%"}/> {laskuri} times
                    <Image src={kokonaiskesto} width={"10%"}/> {this.props.totalkesto} min
                    <Image src={kokonaismatka} width={"10%"}/> {this.props.totalmatka} km
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <PieChart donut={true} max={100} data={[["Exercises", laskuri], ["Level Up", levelup]]}/>

                </div>
            </div>
        )

    }

} export default LevelGraafi;