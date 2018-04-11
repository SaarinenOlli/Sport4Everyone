import React, {Component} from 'react';
import UintiTieto from './UintiTieto';
import {Col, Row, Image, Panel, Well, PanelGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

// Uintitiedot listalle, joka voidaan tulostaa käyttäjälle @Heidi

class UintiTietoLista extends Component {
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
        var uintiTiedotListana = this.props.uintiTiedot
            .sort((a, b) => a.pvm > b.pvm)
            .map(function(tieto) {
                return (
                    <UintiTieto uintiTieto={tieto} poistaUinti={this.props.poista}
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
                        <Panel.Title toggle className="font">Swimming data</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {uintiTiedotListana}
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        );
    }
}

export default UintiTietoLista;