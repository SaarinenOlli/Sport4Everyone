import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, Button} from 'react-bootstrap';
import {auth} from './FireBase';

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
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Sport4Everyone</a>
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