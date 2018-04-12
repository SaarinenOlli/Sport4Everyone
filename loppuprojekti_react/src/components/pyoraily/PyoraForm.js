import React, {Component} from 'react';
import '../paino/Form.css';
import {Col, Row, Image, Panel, Well, PanelGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

class PyoraForm extends Component {
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

    state = {pvm: '', kesto: '', matka: ''}

    syotaPvm = (event) => {
        this.setState({pvm: event.target.value});
    }

    syotaKesto = (event) => {
        this.setState({kesto: event.target.value});
    }

    syotaMatka = (event) => {
        this.setState({matka: event.target.value});
    }

    ready = (event) => {
        event.preventDefault();
        this.props.pyoraTiedotSyotetty(this.state);
        this.setState({pvm: '', kesto: '', matka: ''});
    }

    render() {
        return (
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                defaultActiveKey="2"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle className="font">Add new cycling exercise</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <form>
                            <FormGroup
                                controlId="form"
                            >
                                <FormControl className="font"
                                             id="formControlsDate"
                                             type="date"
                                             placeholder="yyyy-mm-dd"
                                             value={this.state.pvm}
                                             onChange={this.syotaPvm}
                                             required="required"
                                />
                                <br/>
                                <FormControl className="font"
                                             id="formControlsNumber"
                                             type="number"
                                             placeholder="Enter duration (min)"
                                             value={this.state.kesto}
                                             min={0} max={200} step={0.01}
                                             onChange={this.syotaKesto}
                                             required="required"
                                />
                                <br/>
                                <FormControl className="font"
                                             id="formControlsNumber"
                                             type="number"
                                             placeholder="Enter distance (km)"
                                             value={this.state.matka}
                                             min={0} max={200} step={0.01}
                                             onChange={this.syotaMatka}
                                             required="required"
                                />
                            </FormGroup>
                            <br/>
                            <Button className="font" onClick={this.ready}>Submit</Button>
                        </form>
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        )
    }
}

export default PyoraForm;