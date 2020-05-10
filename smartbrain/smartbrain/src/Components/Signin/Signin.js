import React from 'react';

// Signin is our own little component and the rest of the app after signin doesn't care if it succeeded or failed, we can keep signin's functionality within the component. we should turn signin's component into a smart component with a state of input. email and password. convert signin int oclass. 

// We can have more than one smart state. e.g. Signin can be smart event hough it's a child of App. If we are just concerned about Signin, it's good to make Signin smart instaed of constantly having to update App.js and making it grow too many lines. 

class Signin extends React.Component {
    constructor(props) { // to use props, we need to pass props. 
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        // console.log(this.state);
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }, // fetch by default is a GET request, but we want a POST request, so we need to passs a second parameter thatt describes what the requset will be. 
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user); 
                    this.props.onRouteChange('home');
                }
            })
    }
    // check by going to Network => signin => "success" (see fetch url)

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}

                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;

// JSX -> need to insure that your input tags are closed up (not necessary for HTML). 
/*
<input onClick={onRouteChange('home')}  // this will run function when it gets rendered, not when onClick happens
<input onClick={() => onRouteChange('home')}   // this will run whenever onClick happens, and onClick will call this function. this is a function that will get called, () => onRouteChange('home') is defining the function.
*/