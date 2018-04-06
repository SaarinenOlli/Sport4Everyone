import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state  = {hasError: false};
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        console.log(error, info);
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return(
            <div>
                <h3>Sorry! Something went badly wrong.</h3>
            </div>)
        }
        return this.props.children;
    }
}
export default ErrorBoundary;