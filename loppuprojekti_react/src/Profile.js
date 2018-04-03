import React, {Component} from 'react';
import profiilikuva from './Resources/profiilikuva.png';
import trophy from './Resources/trophy.png';
class Profile extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Profile Name</h1>
                </div>
                <br/>
                <div class="col-sm-3"></div>

                <div class="col-sm-6">
                    <img src="/Resources/profiilikuva.png" alt="" class="img-responsive img-circle"></img>
                </div>
                <div class="col-sm-3"></div>
                <br/>
                <div class="col-sm-1"></div>
                <div class="col-sm-2">
                    <img alt="" src="/Resources/trophy.png"></img>
                </div>
                <div class="col-sm-2">
                    <img alt="" src="/Resources/trophy.png"></img>
                </div>
                <div class="col-sm-2">
                    <img alt="" src="/Resources/trophy.png"></img>
                </div>
                <div class="col-sm-2">
                    <img alt="" src="/Resources/trophy.png"></img>
                </div>
                <div class="col-sm-2">
                    <img alt="" src="/Resources/trophy.png"></img>
                </div>
                <div class="col-sm-1"></div>


            </div>
        );
    }
}

export default Profile;