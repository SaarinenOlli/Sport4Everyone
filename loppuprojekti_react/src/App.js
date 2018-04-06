import React from 'react';
import './App.css';
import Home from './Home';
import Profile from './components/Profile';
import Form from './components/Form';
import Profiledata from './components/Profiledata';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PainoData from "./components/PainoData";
import ErrorBoundary from "./components/ErrorBoundary";

const App = appProps => (
    <ErrorBoundary>
        <Router>
            <Switch>
                <Route exact name="index" path="/" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/form" component={Form}/>
                <Route exact path="/profiledata" component={Profiledata}/>
                <Route exact path="/painodata" component={PainoData}/>
            </Switch>
        </Router>
    </ErrorBoundary>
);

export default App;
