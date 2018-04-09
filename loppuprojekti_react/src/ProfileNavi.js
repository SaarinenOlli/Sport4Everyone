import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Nav, Button, NavItem} from 'react-bootstrap';
import {auth} from './FireBase';
import paino from './Resources/scale.png';
import uinti from './Resources/swim.png';
import juoksu from './Resources/run.png';
import pyora from './Resources/bicycle.png';

import {Image, Col, Row, Carousel} from 'react-bootstrap';

class ProfileNavi extends Component {
    render() {

        return (
            <Nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">

                        <li><a href="#"><Image src={paino}/></a></li>
                        <li><a href="#"><Image src={uinti}/></a></li>
                        <li><a href="#"><Image src={juoksu}/></a></li>
                        <li><a href="#"><Image src={pyora}/></a></li>
                    </ul>
                    </div>
                </div>
            </Nav>

        );

    }
}

export default ProfileNavi;