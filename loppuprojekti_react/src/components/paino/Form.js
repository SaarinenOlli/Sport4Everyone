import React, {Component} from 'react';
import '../../App.css';
import {Panel, ButtonToolbar, ButtonGroup, Button, FormGroup, FormControl} from 'react-bootstrap';


//Formi painotietojen syöttämistä varten -Olli
class Form extends Component {

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

    /* Tässä versiossa on placeholderit ja päivämääräpalikat paikallaan*/
    render() {
        return (
            <Panel bsStyle="primary" fluid>
                <Panel.Heading>
                        <h4 className="font">Add new weight</h4>
                </Panel.Heading>
                <Panel.Body>
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
                            placeholder="Enter weight"
                            value={this.state.paino}
                            min={0} max={200} step={0.01}
                            onChange={this.syotaPainoTieto}
                        />
                        </FormGroup>
                            <br/>
                        <Button className="font" bsSize="large" onClick={this.ready}>Submit</Button>
                    </form>
                </Panel.Body>
                <Panel.Body>
                </Panel.Body>
            </Panel>
        )
    }
}
export default Form;