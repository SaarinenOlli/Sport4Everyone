import React, {Component} from 'react';
import Tieto from './Tieto';
import {Panel, PanelGroup} from 'react-bootstrap';
import '../App.css';


//listaa jsonista painotiedot tietoelementeiksi -Olli
class TietoLista extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: '1'
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        var tiedotListana = this.props.tiedot
            .sort((a, b) => a.pvm > b.pvm)
            .map(function(tieto) {
                return (
                    <Tieto tieto={tieto} poista={this.props.poista}
                           key={tieto.painoId}/>);
        }.bind(this));

        return(
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                defaultActiveKey="2"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle className="font">Weight data</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {tiedotListana}
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        );
    }
}

export default TietoLista