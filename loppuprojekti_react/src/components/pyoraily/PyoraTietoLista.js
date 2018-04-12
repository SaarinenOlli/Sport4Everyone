import React, {Component} from 'react';
import PyoraTieto from './PyoraTieto';
import {Col, Row, Image, Panel, Well, PanelGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

// Uintitiedot listalle, joka voidaan tulostaa käyttäjälle @Heidi

class PyoraTietoLista extends Component {
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
        var pyoraTiedotListana = this.props.pyoraTiedot
            .sort((a, b) => a.pvm > b.pvm)
            .map(function(tieto) {
                return (
                    <PyoraTieto pyoraTieto={tieto} poistaPyora={this.props.poista}
                                key={tieto.kestavyysHarjoitusId}/>);
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
                        <Panel.Title toggle className="font">Cycling data</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {pyoraTiedotListana}
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        );
    }
}

export default PyoraTietoLista;