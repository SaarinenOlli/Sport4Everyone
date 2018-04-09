import React, {Component} from "react";
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import {Modal, Button, FormGroup, FormControl, ButtonToolbar} from 'react-bootstrap';
import {auth, googleProvider} from './FireBase';

class Navi extends Component {

    constructor(props, context) {
        super(props, context);
        super();

        this.handleHide = this.handleHide.bind(this);
        this.handleForgottenPassword = this.handleForgottenPassword.bind(this);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            showlogin: false,
            showregister: false,
            showForgottenPassword: false,
            username: '',
            user: null,
            email: '',
            password: '',
            value: '',
            errorMessage: '',
        };
    }

    //Alla käsitellään formiin syötetty email ja salasana ja otetaan talteen @Tiina
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    //Näytetään modaaliboksi, jossa voi lähettää salasanan reset linkin käyttäjän sähköpostiin.
    handleForgottenPassword() {
        this.setState({showForgottenPassword: true});
    }

    //Modaaliboksien piilotus @Tiina
    handleHide() {
        this.setState({showlogin: false});
        this.setState({showregister: false});
        this.setState({showForgottenPassword: false});
        this.setState({email: ''});
        this.setState({password: ''});
    }

    //Modaaliboksien näyttö sen mukaan onko klikattu log in vai register @Tiina
    handleSelect(selectedKey) {

        if (selectedKey === 3.1) {
            this.setState({showlogin: true});
        } else if (selectedKey === 3.2) {
            this.setState({showregister: true});
        }

    }

    //Kun kirjaudutaan sisälle, status muuttuu useriksi, modaaliboksi menee kiinni ja
    //redirectataan profile-sivulle. @Tiina @Ville
    loginGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user,
                    showlogin: false
                });
                this.props.history.push('/profile');
            })
            .catch(error => {
                this.dialog.showAlert(error.message);
                console.log(error.message);
            });
    }

    //Rekisteröinti omalla sähköpostiosoitteella, samalla rekisteröityessään käyttäjä kirjautuu sisälle
    //(FireBasen ominaisuus, että kirjaa samalla sisään). @Tiina
    registerWithEmail = () => {
        //Formin kautta syötetty data tulee handle-funktion kautta muistissa tänne.
        const email = this.state.email;
        const password = this.state.password;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = auth.currentUser;
                this.setState({
                    user,
                    showlogin: false
                });
                this.props.history.push('/profile');
            })
            .catch(error => {
                this.dialog.showAlert(error.message);
                console.log(error.message);
            });

    }

    //Käyttäjä kirjautuu sisälle omilla olemassa olevilla sähköpostitunnuksilla. @Tiina
    loginWithEmail = () => {
        const email = this.state.email;
        const password = this.state.password;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                const user = auth.currentUser;
                this.setState({
                    user,
                    showlogin: false
                });
                this.props.history.push('/profile');
            })
            .catch(error => {
                this.dialog.showAlert(error.message);
                console.log(error.message);
            });
    }

    //Resetoidaan käyttäjän salasana @Tiina
    resetPassword = () => {
        const emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress)
            .then(() => {
                this.dialog.showAlert("Email has been sent!")
            })
            .catch(error => {
                this.dialog.showAlert(error.message);
            });
    }

    //@Tiina @Ville
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});

            }
        });
    }


    render() {

        return (
            //Näytetään navbar.
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Sport4Everyone

                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight activeKey={3} onSelect={key => this.handleSelect(key)}>
                        <NavDropdown title="Tähän hampurilainen" eventKey={3} id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><Glyphicon glyph="user"/> Log in
                            </MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.2}><Glyphicon glyph="user"/> Register</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>


                {/*Näytetään login modaaliboksi silloin kun on klikattu login*/}
                <div className="modal-container" style={{height: 10}}>
                    <Modal
                        show={this.state.showlogin}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Log in
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <FormGroup
                                    controlId="form"
                                >
                                    <FormControl
                                        type="text"
                                        label="Email"
                                        value={this.state.email}
                                        placeholder="Enter email"
                                        onChange={this.handleEmailChange}
                                    />
                                    <br/>
                                    <FormControl
                                        type="password"
                                        label="Password"
                                        value={this.state.password}
                                        placeholder="Enter password"
                                        onChange={this.handlePasswordChange}
                                    />
                                </FormGroup>
                                <ButtonToolbar>
                                    <Button bsStyle="primary" onClick={this.loginWithEmail}>Log in with email</Button>
                                    <Dialog ref={(el) => {
                                        this.dialog = el
                                    }}/>
                                    <Button bsStyle="danger" onClick={this.loginGoogle}>Login with Google</Button>
                                    <Dialog ref={(el) => {
                                        this.dialog = el
                                    }}/>
                                </ButtonToolbar>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="link" onClick={this.handleForgottenPassword}>Forgot your password?</Button>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                {/*Näytetään register modaaliboksi silloin kun on klikattu register*/}
                <div className="modal-container" style={{height: 10}}>
                    <Modal
                        show={this.state.showregister}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Register
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <FormGroup
                                    controlId="form"
                                >
                                    <FormControl
                                        type="text"
                                        label="Email"
                                        value={this.state.email}
                                        placeholder="Enter email"
                                        onChange={this.handleEmailChange}
                                    />
                                    <br/>
                                    <FormControl
                                        type="password"
                                        label="Password"
                                        value={this.state.password}
                                        placeholder="Enter password"
                                        onChange={this.handlePasswordChange}
                                    />
                                </FormGroup>
                                <ButtonToolbar>
                                    <Button bsStyle="primary" onClick={this.registerWithEmail}>Register with email</Button>
                                    <Dialog ref={(el) => {
                                        this.dialog = el
                                    }}/>
                                </ButtonToolbar>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>


                {/*Näytetään forgotten password modaaliboksi silloin kun on klikattu log in-ikkunasta forgotten password.*/}
                <div className="modal-container" style={{height: 10}}>
                    <Modal
                        show={this.state.showForgottenPassword}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Forgot your password?
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <FormGroup
                                    controlId="formBasicText"
                                >
                                    <p>Please enter your email, and we’ll send you a link
                                        for resetting your password.</p>
                                    <FormControl
                                        type="text"
                                        value={this.state.email}
                                        placeholder="Enter email"
                                        onChange={this.handleEmailChange}
                                    />
                                </FormGroup>
                                <ButtonToolbar>
                                    <Button bsStyle="primary" onClick={this.resetPassword}>Send email</Button>
                                    <Dialog ref={(el) => {
                                        this.dialog = el
                                    }}/>
                                </ButtonToolbar>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        );

    }
}

export default Navi;