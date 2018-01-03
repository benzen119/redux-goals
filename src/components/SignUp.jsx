import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp(){
        console.log(this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch( error => {
                this.setState({error})
            })
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '3%'}}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input onChange={event => this.setState({email: event.target.value})} className="form-control" type="text" placeholder="email" style={{marginRight: '5px'}}/>
                    <input onChange={event => this.setState({password: event.target.value})} className="form-control" type="password" placeholder="password" />
                    <button onClick={() => this.signUp()} className="btn btn-primary" type="button">Sign Up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div>
                    <Link to={"/signin"}>Sign In</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;