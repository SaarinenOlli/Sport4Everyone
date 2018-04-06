import {Jumbotron, Navbar, NavItem} from 'react-bootstrap';
import React, {Component} from "react";
import '../App.css';

class ErrorPageIfNotLoggedIn extends Component {
    //Tämä on error-sivu, joka tulee näkyviin jos joku yrittää päästä muulle sivulle kuin kotisivulle,
    //silloin kun ei ole kirjautunut.

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Sport4Everyone</a>
                        </Navbar.Brand>
                    </Navbar.Header>
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