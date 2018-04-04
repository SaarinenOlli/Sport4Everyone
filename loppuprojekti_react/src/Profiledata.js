import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import chart from './chart.png';
import Navi from './Navi';



class Profiledata extends Component {
    render() {
        return (
            <div>
                <nav className="Navi">
                    <Navi/>
                </nav>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image responsive="true" src={chart} />
                </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Image responsive="true" src={chart} />
                </div>
            </div>

        );
    }
}

export default Profiledata;