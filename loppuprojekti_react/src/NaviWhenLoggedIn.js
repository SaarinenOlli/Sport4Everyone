import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, Button} from 'react-bootstrap';
import {auth} from './FireBase';
import './App.css';
import paino from './Resources/scale.png';
import uinti from './Resources/swim.png';
import juoksu from './Resources/run.png';
import pyora from './Resources/bicycle.png';
import logout from './Resources/logout.png';
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
                <Navbar inverse>
                <Navbar.Form className="nav-bar nav" width="25%" pullLeft>

                    <a href="#"><Image src={paino} width={"15%"}/></a>
                    <a href="#"><Image src={uinti} width={"15%"}/></a>
                    <a href="#"><Image src={juoksu}width={"15%"}/></a>
                    <a href="#"><Image src={pyora}width={"15%"}/></a>


                    <a href="#" onClick={this.logout}><Image src={logout}width={"15%"}/></a>


                </Navbar.Form>
                </Navbar>

            </div>

        );

    }
}

export default NaviWhenLoggedIn;