import React, {Component} from 'react';
import ErrorPageSomethingWentWrong from "./ErrorPageSomethingWentWrong";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            hasError: false

            // Ei käytössä tällä hetkellä
            // currentError: null,
            // errorInfo: null,
            // errorMessage: ''
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,

            // Ei käytössä tällä hetkellä
            // currentError: error,
            // errorInfo: info,
            // errorMessage: error.message
        });
        console.log(error, info);
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return(
                <ErrorPageSomethingWentWrong/>)
            {/*<div>*/}
                {/*/!*<h3>Sorry! Something went badly wrong.</h3>*!/*/}

                {/*/!*Alla oleva tulostaa "true", jos tapahtuu error*!/*/}
                {/*/!*<h3>{this.state.hasError.toString()}</h3>*!/*/}

                {/*/!*Alla oleva ei tulosta mitään*!/*/}
                {/*/!*<h1>{this.state.info && this.state.info.componentStack}</h1>*!/*/}

                {/*/!*Alla oleva tulostaa ErrorButtonissa määritellyn Errorlauseen "I crashed"*!/*/}
                {/*/!*<h1>{this.state.errorMessage}</h1>*!/*/}

        {/*</div>)*/}
        }
        return this.props.children;
    }
}
export default ErrorBoundary;