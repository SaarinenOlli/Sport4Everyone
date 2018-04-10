import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart, BarChart } from 'react-chartkick';
window.Chart = require('../../node_modules/chart.js/src/chart');
// import {Chart} from 'chart';

//alustetaan Dataa graafia varten, tämä on RAAKADATAA ja korvataan myöhemmin tietokantadatalla @Renne
/*var data = [
    {"name":"Paino", "data": {"2017-01-01": 99, "2017-01-02": 98.5, "2017-01-03": 98.75,"2017-01-04": 98, "2017-01-06": 98,"2017-01-07": 98.2, "2017-01-08": 95, "2017-01-09": 96.5, "2017-01-10": 99, "2017-01-11": 98.5, "2017-01-12": 98.75,"2017-01-13": 98, "2017-01-14": 98,"2017-01-17": 98.2, "2017-01-21": 95, "2017-01-22": 96.5}},
    {"name":"PainoKA", "data": {"2017-01-01": 99.5, "2017-01-02": 99.25, "2017-01-03": 99.12,"2017-01-04": 98.75, "2017-01-06": 98.5,"2017-01-07": 98.4, "2017-01-08": 97.5, "2017-01-09": 97.2}}
];*/

class KestavyysGraafi extends Component {
    render() {

        const graafiKestavyysMatka = this.props.data.reduce((acc, datum) => { acc[datum.pvm] = datum.matkaKm; return acc; }, {});

        const graafiKestavyysAika = this.props.data.reduce((acc, datum) => { acc[datum.pvm] = datum.kestoMin; return acc; }, {});



        return (
            <div>

                {/*@Renne TÄssä luodaan Chart.js:n avulla kivoja graafeja!*/}
                <div style={{display: 'flex', justifyContent: 'center'}}>

                    <LineChart width="60%" xtitle="Time" ytitle="Excercise duration" data={graafiKestavyysAika}  />
                </div>
                {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
                    {/*<PieChart donut={true} max={100} data={[["Steps", 8544], ["Steps from goal", 1456]]}  />*/}
                {/*</div>*/}

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <LineChart width="60%" xtitle="Time" ytitle="Excercise distance" data={graafiKestavyysMatka} />
                </div>
                {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
                    {/*<PieChart donut={true} max={100} data={[["Steps", 8544], ["Steps from goal", 1456]]}  />*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default KestavyysGraafi;