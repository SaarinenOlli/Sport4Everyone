import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import './App.css';

// Komponentti käyttäjän tämän hetkisen levelin näyttämiseen donitsina
// Toimii kaikkien lajien kanssa
// @Olli @Elina

var levelup;
var laskuri;

class LevelGraafi extends Component{

    render () {
        levelup = this.props.levelup;
        laskuri = this.props.laskuri;

        return (
            <div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <PieChart donut={true} max={100} width="80%" data={[["Exercises", laskuri], ["Level Up", levelup]]}/>

                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 className="font">Level {this.props.level}</h1>
                </div>
            </div>
        )

    }

} export default LevelGraafi;