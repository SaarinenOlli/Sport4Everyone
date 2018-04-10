import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, Button, NavItem} from 'react-bootstrap';
import {auth} from './FireBase';
import './App.css';

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

        return (
            <div>
                <Navbar inverse className="nav-bar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            Sport4Everyone
                        </Navbar.Brand>
                        <Navbar.Brand>
                            Running
                        </Navbar.Brand>
                        <Navbar.Brand>
                            Cyckling
                        </Navbar.Brand>
                        <Navbar.Brand>
                            Swimming
                        </Navbar.Brand>

                    </Navbar.Header>
                    <Nav pullRight>
                        <Button onClick={this.logout}>Logout</Button>
                    </Nav>
                </Navbar>
            </div>

        );

    }
}

export default NaviWhenLoggedIn;