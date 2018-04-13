import React, { Component } from 'react';
import './components/App.css';
import Navi from './Navi';
import {Col, Row, Image, Well, Nav} from 'react-bootstrap';
import graafiesimerkkietusivu from './Resources/graafiesimerkkietusivu.PNG';
import dataesimerkkietusivu from './Resources/dataesimerkkietusivu.PNG';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav>
                    {/*Ao. välittää propsit Naville, jotta siellä voidaan niitä käyttää.*/}
                    <Navi {...this.props}/>
                </Nav>
                    <Well className="App-introteksti">
                        Are you ready to take yourself to the next level?<br/>
                        This playful sports app will help you to become better you!
                    </Well>
                <div className="etusivunpohja">
                    <Row>
                    <Col xs={12} md={6}>
                        <Image className="img-responsive" src={graafiesimerkkietusivu}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image className="img-responsive"  responsive src={dataesimerkkietusivu}/>
                    </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;