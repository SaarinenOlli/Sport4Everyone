import React, {Component} from "react";
import './App.css';
import NaviWhenLoggedIn from "../NaviWhenLoggedIn";

class LoadingPage extends Component {
    //Tämä on plank page, joka tulee näkyviin kun ladataan seuraavaa sivua, kun tietoja vielä haetaan.

    render() {
        return (

            <div className="loadingpage">
                <nav>
                    <NaviWhenLoggedIn {...this.props}/>
                </nav>
            </div>

        );

    }
}

export default LoadingPage;