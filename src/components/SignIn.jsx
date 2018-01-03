import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        console.log(this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        return (
            <div className="form-inline" style={{ margin: '3%' }}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input onChange={event => this.setState({ email: event.target.value })} className="form-control" type="text" placeholder="email" style={{ marginRight: '5px' }} />
                    <input onChange={event => this.setState({ password: event.target.value })} className="form-control" type="password" placeholder="password" />
                    <button onClick={() => this.signIn()} className="btn btn-primary" type="button">Sign In</button>
                </div>
                <div>{this.state.error.message}</div>
                <div>
                    <Link to={"/signup"}>Sign Up instead</Link>
                </div>
            </div>
        )
    }
}

export default SignIn;