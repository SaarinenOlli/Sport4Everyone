import React, {Component} from 'react';
import UintiData from "./uinti/UintiData";
import PyoraData from "./pyoraily/PyoraData";
import JuoksuData from "./juoksu/JuoksuData";


var uinti;
var pyora;
var juoksu;

class Lajikoonti extends Component {


    render() {
        uinti = this.props.uintidata.uintilaskuri;
        pyora = this.props.pyoradata.pyoralaskuri;
        juoksu = this.props.juoksudata.juoksulaskuri;

        return (
            <div>
                Swimming: {uinti}
                Cyckling: {pyora}
                Running: {juoksu}
            </div>
        );
    }

}

export default Lajikoonti;