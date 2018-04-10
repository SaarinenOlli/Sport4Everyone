import React, {Component} from 'react';
import trophy from '../Resources/trophy.png';
import pelihahmo from '../Resources/pelihahmo.png';
import kuvaaja from '../Resources/kuvaaja.png'
import {Image, Col, Row, Carousel} from 'react-bootstrap';
import NaviWhenLoggedIn from "../NaviWhenLoggedIn";
import {auth} from '../FireBase';
import ErrorPageIfNotLoggedIn from "./error/ErrorPageIfNotLoggedIn";

class Profile extends Component {

    render() {
        const user = auth.currentUser;

        if (user === null) {
            return (
                <ErrorPageIfNotLoggedIn/>
            )
        } else {
            return (
                <div>
                    <nav className="Navi">
                        <NaviWhenLoggedIn {...this.props}/>
                    </nav>
                    <Row>
                        <Col xs={0} md={4}/>
                        <Col xs={12} md={4}>
                            <h1 align="middle">Profile Name</h1>
                        </Col>
                        <Col xs={0} md={4}/>

                    </Row>
                    <br/>
                    <Row>
                        <Col xs={0} md={2}/>
                        <Col xs={12} md={4}>
                            <Image src={pelihahmo} circle className={"pull-right"}/>
                        </Col>
                        <Col xs={0} md={4}>
                            <div>
                                <Image responsive="true" src={kuvaaja} rounded/>
                            </div>

                        </Col>
                        <Col xs={0} md={2}/>
                    </Row>


                </div>


            );
        }
    }
}

export default Profile;