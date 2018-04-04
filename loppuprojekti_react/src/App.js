import React from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Form from './Form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = appProps => (
    <Router>
        <Switch>
        <Route exact name="index" path="/" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
            <Route exact path="/form" component={Form}/>

        </Switch>
    </Router>
);

export default App;
