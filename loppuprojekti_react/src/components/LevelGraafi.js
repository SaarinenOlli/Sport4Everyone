import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';


var levelup;
var laskuri;

class levelGraafi extends Component{

    render () {

        levelup = this.props.levelup;
        laskuri = this.props.laskuri;

        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <PieChart donut={true} max={100} data={[["Exercises", laskuri], ["Level Up", levelup]]}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Level {this.props.level}</h1>
                </div>
            </div>
        )

    }

} export default levelGraafi;