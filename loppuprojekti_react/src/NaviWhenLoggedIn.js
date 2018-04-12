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
                <Navbar style={styles}>
                    <Navbar.Header>
                        <Col xs={6} md={4}>
                            <FormGroup>
                                <h2 className="font">Sport4Everyone</h2>
                            </FormGroup>
                        </Col>
                    </Navbar.Header>
                    <Navbar.Collapse>
                <Navbar.Form className="ikonirivi">
                    <Col md={8} mdPush={1}>
                    <FormGroup>
                    <NavItem className="ikoni" href="/weight"><Image src={paino} width={"60%"}/></NavItem>
                    </FormGroup>
                    <FormGroup>
                    <NavItem className="ikoni" href="/swimming"><Image src={uinti} width={"60%"}/></NavItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem className="ikoni" href="/running"><Image src={juoksu}width={"60%"}/></NavItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem className="ikoni" href="/cycling"><Image src={pyora}width={"60%"}/></NavItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem className="ikoni" onClick={this.logout}><Image src={logout}width={"60%"}/></NavItem>
                    </FormGroup>
                    </Col>

                </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>

        );

    }

}

export default NaviWhenLoggedIn;