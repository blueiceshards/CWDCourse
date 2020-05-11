import React from 'react';

class Register extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        // console.log(this.state);
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }, // fetch by default is a GET request, but we want a POST request, so we need to passs a second parameter thatt describes what the requset will be. 
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) { // need to have user.id because if "user", "incorrect form response" will be user.
                    this.props.loadUser(user); //build in app.js comp cos whole app needs this.
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name" 
                                id="name"
                                onChange={this.onNameChange}
                                />
                            </div>
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
                            value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;

// form: automatically if there is a submit i.e. onsubmit, will automatcillay try to send those forms. will get some error: Form submission canceled because the form is not connected. but we should do Div because we will send forms through JSON instead of through HTML forms to allow for full customization with JSON.

// VALIDATION is very important. right now, we can submit a blank register form and still log in (database will reflect a blank user). validation is very important. when you communiate between front end and back end, there are a few layers of security. first, the front end will do its own validation. e.g. in the sign in or register page, within our front end react app, we can check that (register has an onsubmit button) onsubmit will check that name is not empty, email has proper email format, and password has some sort of validation (greater than 6 characters). the front end will send that validated information to the backend.

// important thing to make sure with servers => that the servers will never trust anything received from the front end. server should do its own validation to check email, name and password, and make sure they are values that it wants to transfer and transact into the database. one way to do this: see handleRegister code in smartbrainapi. 