import React, {Component} from 'react';

class ErrorButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            releaseBugs: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            releaseBugs: true
        });
    }

    render() {
        if (this.state.releaseBugs) {
            throw new Error("I crashed!");
        }
        return (
            <button className="btn" onClick={this.handleClick}>
                {"Error Button!"}
            </button>
        );
    }

    // render() {
    //     return (<button onClick={this.props.handleClick}>ErrorClick</button>)
    // };

}

export default ErrorButton;