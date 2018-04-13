import React, {Component} from 'react';
import JuoksuTieto from './JuoksuTieto';
import {PanelGroup, Panel} from 'react-bootstrap';

// Listataan juoksutiedot käyttäjälle @Elina

class JuoksuTietoLista extends Component {
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
        var juoksuTiedotListana = this.props.juoksuTiedot
            .sort((a, b) => a.pvm > b.pvm)
            .map(function(tieto) {
                return (
                    <JuoksuTieto juoksuTieto={tieto} poistaJuoksu={this.props.poista}
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
                        <Panel.Title toggle className="font">Running data</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {juoksuTiedotListana}
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        );
    }
}

export default JuoksuTietoLista;