import React, { Component } from 'react';
import './components/App.css';
import Navi from './Navi';
import {Col, Row, Image, Panel, Well} from 'react-bootstrap';
import pelihahmo from './Resources/pelihahmo.png';
import graafiesimerkkietusivu from './Resources/graafiesimerkkietusivu.PNG';
import dataesimerkkietusivu from './Resources/dataesimerkkietusivu.PNG';

class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    {/*Ao. välittää propsit Naville, jotta siellä voidaan niitä käyttää.*/}
                    <Navi {...this.props}/>
                </nav>
                <div className="etusivunpohja">
                    <h2 className="App-introteksti">
                        This is a training app for you who want to follow up your training
                        and see awesome charts from your training results!
                    </h2>
                    <Col xs={6} md={4}>
                                <img className="pelkkakuva" src={pelihahmo}/>
                    </Col>
                    <Col xs={12} md={8}>
                                    <img className="etusivukuva" src={graafiesimerkkietusivu}/>
                        <p></p>
                                    <img className="etusivukuva" src={dataesimerkkietusivu}/>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Home;