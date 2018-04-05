import React, {Component} from 'react';
import trophy from '../Resources/trophy.png';
import profiilikuva from '../Resources/profiilikuva.png';
import kuvaaja from '../Resources/kuvaaja.png'
import {Image, Col, Row, Carousel} from 'react-bootstrap';
import NaviWhenLoggedIn from "../NaviWhenLoggedIn";


class Profile extends Component {

    render() {
        return (
            <div>
                <div>
                    <NaviWhenLoggedIn {...this.props}/>
                </div>
                <Row>
                    <h1 align="middle">Profile Name</h1>
                </Row>
                <br/>
                <Row>
                    <Col xs={1}/>
                <Col xs={10} md={12}>
                    <Image responsive="true" src={profiilikuva} circle/>
                </Col>
                    <Col xs={1}/>
                </Row>


                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Trophies</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Trophies</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Trophies</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>;

                <div>
                    <Image responsive="true" src={kuvaaja} rounded/>
                </div>

            </div>


        );
    }
}

export default Profile;