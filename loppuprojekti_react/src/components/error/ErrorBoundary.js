import React, {Component} from 'react';
import ErrorPageSomethingWentWrong from "./ErrorPageSomethingWentWrong";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
        });
        console.log(error, info);
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return(
                <ErrorPageSomethingWentWrong/>)
        }
        return this.props.children;
    }
}
export default ErrorBoundary;