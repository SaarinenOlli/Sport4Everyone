import {Jumbotron, Navbar, Col, FormGroup} from 'react-bootstrap';
import React, {Component} from "react";
import '../../App.css';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

class ErrorPageIfNotLoggedIn extends Component {
    //Tämä on error-sivu, joka tulee näkyviin jos joku yrittää päästä muulle sivulle kuin kotisivulle,
    //silloin kun ei ole kirjautunut.

    render() {

        bootstrapUtils.addStyle(Navbar, 'custom');

        var styles={
            "backgroundColor" : "black",
            "color"           : "white",
            "padding-top"     : "5px",
            "padding-bottom"  : "-20px"
        };

        return (
            <div>
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
                            </Col>

                        </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>
                <Jumbotron>
                    <p className="text-center">
                        You tried to go to a page which is only for registered members.<br/>
                        Please go to the home page and log in to continue:<br/>
                        <a href="/">Sport4Everyone</a>
                    </p>
                </Jumbotron>
            </div>


        )

    }
}

export default ErrorPageIfNotLoggedIn;