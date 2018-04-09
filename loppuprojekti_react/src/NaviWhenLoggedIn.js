import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, Button} from 'react-bootstrap';
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
                        <Navbar.Text>
                            Sport4Everyone
                        </Navbar.Text>
                    </Navbar.Header>
                    {/*<Nav pullRight>*/}
                        {/*<Button onClick={this.logout}>Logout</Button>*/}
                    {/*</Nav>*/}
                    <Navbar.Form pullRight>
                        <Button onClick={this.logout}>Logout</Button>
                    </Navbar.Form>
                </Navbar>
            </div>

        );

    }
}

export default NaviWhenLoggedIn;