import React, { Component } from 'react';
import './components/App.css';
import Navi from './Navi';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <nav className="Navi">
                    {/*Ao. välittää propsit Naville, jotta siellä voidaan niitä käyttää.*/}
                    <Navi {...this.props}/>
                </nav>
                <p className="App-introteksti">
                    Tämä on treeniappi, johon voit syöttää omia treenitietoja, <br/> ja pääset vertailemaan omia
                    treenituloksia!
                </p>
            </div>
        );
    }
}

export default Home;