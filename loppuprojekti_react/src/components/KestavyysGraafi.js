import React, {Component} from 'react';
import { LineChart, PieChart, AreaChart, DoughnutChart, BarChart, ColumnChart} from 'react-chartkick';
window.Chart = require('../../node_modules/chart.js/src/chart');


class KestavyysGraafi extends Component {
    render() {

        const graafiKestavyysMatka = this.props.data
        // Data pitää tässä vielä järjestää uudelleen, jotta graafi tulostuu halutulla tavalla @Elina
            .sort((a, b) => a.pvm > b.pvm)
            .reduce((acc, datum) => { acc[datum.pvm] = datum.matkaKm; return acc; }, {});

        const graafiKestavyysAika = this.props.data
            .sort((a, b) => a.pvm > b.pvm)
            .reduce((acc, datum) => { acc[datum.pvm] = datum.kestoMin; return acc; }, {});


        return (
            <div>
                {/*@Renne TÄssä luodaan Chart.js:n avulla kivoja graafeja!*/}
                <div className="graafi">
                    <ColumnChart title="Exercise duration" download={true} width="100%" ytitle="minutes" data={graafiKestavyysAika}  messages={{empty: "No data yet! (You can do it!)"}}/>
                </div>
                <div className="graafi">
                    <ColumnChart title="Exercise distance" download={true} width="100%" ytitle="Kilometers" data={graafiKestavyysMatka} messages={{empty: "No data yet! (You can do it!)"}}/>
                </div>
            </div>

        );
    }
}

export default KestavyysGraafi;