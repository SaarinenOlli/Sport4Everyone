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
            return <h3>Joku meni pieleen</h3>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;