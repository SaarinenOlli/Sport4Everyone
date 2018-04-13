import React, {Component} from 'react';
import '../App.css';
import {Panel, Button, FormGroup, FormControl, PanelGroup} from 'react-bootstrap';


//Formi painotietojen syöttämistä varten -Olli
class Form extends Component {
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

    state = {pvm: '', paino: ''}

    syotaPvmTieto = (event) => {
        this.setState({pvm: event.target.value});
    }

    syotaPainoTieto = (event) => {
        this.setState({paino: event.target.value});
    }
    ready = (event) => {
        event.preventDefault();
        this.props.tiedotSyotetty(this.state);
        this.setState({pvm: '', paino: ''});
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
                    <Panel>
                    <Panel.Heading>
                        <Panel.Title toggle className="font">Add new weight</Panel.Title>
                    </Panel.Heading>
                    </Panel>
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
                                             onChange={this.syotaPvmTieto}
                                />
                                <br/>
                                <FormControl className="font"
                                             id="formControlsNumber"
                                             type="number"
                                             placeholder="Enter weight (kg)"
                                             value={this.state.paino}
                                             min={0} max={200} step={0.01}
                                             onChange={this.syotaPainoTieto}
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
export default Form;