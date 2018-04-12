import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';

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
                    <p>Number of exercises: {laskuri}, Total time(min): {this.props.totalkesto} , Total distance(km):{this.props.totalmatka} </p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <PieChart donut={true} max={100} data={[["Exercises", laskuri], ["Level Up", levelup]]}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Level {this.props.level}</h1>
                </div>
            </div>
        )

    }

} export default LevelGraafi;