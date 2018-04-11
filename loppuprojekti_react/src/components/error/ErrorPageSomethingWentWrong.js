import React, {Component} from 'react';
import {Jumbotron, Navbar} from 'react-bootstrap';

class ErrorPageSomethingWentWrong extends Component {
    //Tämä on error-sivu, joka tulee näkyviin, jos ohjelma meinaa kaatua.
    //App.js:ssa kaikki elementit on wrapatty ErrorBoundary-elementillä, joka palauttaa tämän sivun

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
                        We are sorry. Something went wrong.<br/>
                        Please go to the home page and try something else.<br/>
                        <a href="/">Sport4Everyone</a>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default ErrorPageSomethingWentWrong;


