import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import chart from './chart.png';
import Navi from './Navi';
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import Chart from 'chart.js'
window.Chart = require('chart.js');

var data = [
    {"name":"Paino", "data": {"2017-01-01": 99, "2017-01-02": 98.5, "2017-01-03": 98.75,"2017-01-04": 98, "2017-01-06": 98,"2017-01-07": 98.2, "2017-01-08": 95, "2017-01-09": 96.5}},
    {"name":"PainoKA", "data": {"2017-01-01": 99.5, "2017-01-02": 99.25, "2017-01-03": 99.12,"2017-01-04": 98.75, "2017-01-06": 98.5,"2017-01-07": 98.4, "2017-01-08": 97.5, "2017-01-09": 97.2}}
];

class Profiledata extends Component {
    render() {
        return (
            <div>
                <nav className="Navi">
                    <Navi/>
                </nav>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <LineChart width="40%" xtitle="Time" ytitle="Weight" min={90} max={100} data={data}  />
                    </div>
                <hr/>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <PieChart donut={true} data={[["Steps", 8544], ["Steps from goal", 1456]]}  />
                    </div>
            </div>

        );
    }
}

export default Profiledata;