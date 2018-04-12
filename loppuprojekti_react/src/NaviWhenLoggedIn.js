import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, NavItem, FormGroup, BreadcrumbItem} from 'react-bootstrap';
import {auth} from './FireBase';
import './components/App.css';
import paino from './Resources/scale.png';
import uinti from './Resources/swim.png';
import juoksu from './Resources/run.png';
import pyora from './Resources/bicycle.png';
import logout from './Resources/logout.png';
import {Image, Col, Row, Carousel} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';


class NaviWhenLoggedIn extends Component {

    logout = () => {

        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
                this.props.history.push('/');
            });
    }

    render() {
        bootstrapUtils.addStyle(Navbar, 'custom');

        var styles={
            "backgroundColor" : "#FCFCFC",
            "color"           : "black",
            "padding-top"     : "5px",
            "position" : "fixed",
            "z-index": "1",
            "width" : "100%",
            "top" : "0",
        };

        return (
                <Navbar style={styles}  >
                    <Navbar.Header className="logotekstibar">
                        <Col xs={4} sm={5} md={4} xsHidden>
                                <h2 className="font logoteksti">Sport4Everyone</h2>
                        </Col>
                    </Navbar.Header>

                    <Col xs={12} sm={7} md={8} mdPush={1}>
                <Navbar.Form className="ikonirivi">
                    <FormGroup>
                        <Col xs={1}></Col>
                    <Col xs={2}>

                    <NavItem className="ikoni" href="/weight"><Image className="ikonikuva" src={paino}/></NavItem>

                    </Col>
                        <Col xs={2}>

                    <NavItem className="ikoni" href="/swimming"><Image className="ikonikuva" src={uinti}/></NavItem>

                        </Col>
                    <Col xs={2}>

                    <NavItem className="ikoni" href="/running"><Image className="ikonikuva" src={juoksu}/></NavItem>

                    </Col>
                    <Col xs={2}>

                    <NavItem className="ikoni" href="/cycling"><Image className="ikonikuva" src={pyora}/></NavItem>

                    </Col>
                    <Col xs={2}>

                    <NavItem className="ikoni" onClick={this.logout}><Image className="ikonikuva" src={logout}/></NavItem>

                    </Col>
                        <Col xs={1}></Col>
                    </FormGroup>

                </Navbar.Form>
                </Col>

                </Navbar>


        );

    }

}

export default NaviWhenLoggedIn;