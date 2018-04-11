import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, NavItem, FormGroup, BreadcrumbItem} from 'react-bootstrap';
import {auth} from './FireBase';
import './App.css';
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
            "backgroundColor" : "black",
            "color"           : "white",
            "padding-top"     : "5px",
            "padding-bottom"  : "-20px"
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
                <Navbar.Form className="nav-bar nav">
                    <Col md={8} mdPush={1}>
                    <FormGroup>
                    <BreadcrumbItem href="/profile"><Image src={paino} width={"35%"}/></BreadcrumbItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem href="/swimming"><Image src={uinti} width={"35%"}/></NavItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem href="/running"><Image src={juoksu}width={"35%"}/></NavItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem href="/cycling"><Image src={pyora}width={"35%"}/></NavItem>
                    </FormGroup>

                    <FormGroup>
                    <NavItem onClick={this.logout}><Image src={logout}width={"35%"}/></NavItem>
                    </FormGroup>
                    </Col>

                </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>

        );

    }

}

export default NaviWhenLoggedIn;