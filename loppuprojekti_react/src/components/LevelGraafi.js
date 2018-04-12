import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import './App.css';
import blocks from '../Resources/blocks.png';
import kokonaiskesto from '../Resources/quarter-of-an-hour.png';
import kokonaismatka from '../Resources/school-rule.png';
import {Image} from 'react-bootstrap';

// Komponentti käyttäjän tämän hetkisen levelin näyttämiseen donitsina
// Toimii kaikkien lajien kanssa
// @Olli @Elina

var levelup;
var laskuri;
var totalmatka;
var totalkesto;

class LevelGraafi extends Component{

    render () {
        levelup = this.props.levelup;
        laskuri = this.props.laskuri;

        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image src={blocks} width={"60%"}/> {laskuri} times
                    <Image src={kokonaiskesto} width={"60%"}/> {this.props.totalkesto} min
                    <Image src={kokonaismatka} width={"60%"}/> {this.props.totalmatka} km
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <PieChart donut={true} max={100} data={[["Exercises", laskuri], ["Level Up", levelup]]}/>

                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 className="font">Level {this.props.level}</h1>
                </div>
            </div>
        )

    }

} export default LevelGraafi;