import React from 'react';
import './App.css';
import Kirjaudu from './Kirjaudu';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = appProps => (
    <Router>
        <Switch>
        <Route exact name="index" path="/" component={Home}/>
        <Route exact path="/kirjaudu" component={Kirjaudu}/>
        {/*<Route exact path="/profiili" component={Profile}/>*/}
        </Switch>
    </Router>
);

export default App;
