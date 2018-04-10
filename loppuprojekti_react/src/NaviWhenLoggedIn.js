import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, Button} from 'react-bootstrap';
import {auth} from './FireBase';
import './App.css';
import paino from './Resources/scale.png';
import uinti from './Resources/swim.png';
import juoksu from './Resources/run.png';
import pyora from './Resources/bicycle.png';
import {Image, Col, Row, Carousel} from 'react-bootstrap';

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
                <Navbar inverse className="nav-bar" width="25%">
                    <Navbar.Header>
                        <Navbar.Text>
                            Sport4Everyone
                        </Navbar.Text>

                    </Navbar.Header>
                    <ul class="nav navbar-nav">
                    <li><a href="/PainoData"><Image src={paino} width={"25%"}/></a></li>
                    <li><a href="/UintiData"><Image src={uinti} width={"25%"}/></a></li>
                    <li><a href="/JuoksuData"><Image src={juoksu}width={"25%"}/></a></li>
                    <li><a href="/PyorailyData"><Image src={pyora}width={"25%"}/></a></li>
                    </ul>
                    <Navbar.Form pullRight>
                        <Button onClick={this.logout}>Logout</Button>
                    </Navbar.Form>
                </Navbar>
            </div>

        );

    }
}

export default NaviWhenLoggedIn;