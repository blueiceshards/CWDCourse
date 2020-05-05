import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good.</h1>
        } 
        return this.props.children
    }
}


export default ErrorBoundry;

// (props) so we have access to props.
/* 
if we are running our app in development mode, it will show you the errors. errorboundry is useful when we are putting our app into production. so that yo udon't have detailed log of what errors. 

https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom


*/