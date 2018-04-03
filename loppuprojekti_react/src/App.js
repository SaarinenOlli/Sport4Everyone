import React from 'react';
import './App.css';
import Kirjaudu from './Kirjaudu';
import Home from './Home';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = appProps => (
    <Router>
        <Switch>
        <Route exact name="index" path="/" component={Home}/>
        <Route exact path="/login" component={Kirjaudu}/>
        <Route exact path="/profile" component={Profile}/>
        </Switch>
    </Router>
);

export default App;
