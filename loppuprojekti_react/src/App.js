import React from 'react';
import './components/App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PainoData from "./components/paino/PainoData";
import ErrorBoundary from "./components/error/ErrorBoundary";
import ErrorPageSomethingWentWrong from "./components/error/ErrorPageSomethingWentWrong";
import UintiData from "./components/uinti/UintiData";
import JuoksuData from "./components/juoksu/JuoksuData";
import PyoraData from "./components/pyoraily/PyoraData";


const App = appProps => (
    <ErrorBoundary>
        <Router>
            <Switch>
                <Route exact name="index" path="/" component={Home}/>
                <Route exact path="/weight" component={PainoData}/>
                <Route exact path="/swimming" component={UintiData}/>
                <Route exact path="/cycling" component={PyoraData}/>
                <Route exact path="/running" component={JuoksuData}/>
                <Route exact path="/error" component={ErrorPageSomethingWentWrong}/>
            </Switch>
        </Router>
    </ErrorBoundary>
);

export default App;
