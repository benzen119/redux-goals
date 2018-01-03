import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal() {
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({ email, title });
    }

    render() {
        return (
            <div className="form-inline">
               <div className="form-group">
                   <input onChange={event => this.setState({title: event.target.value})} type="text" placeholder="add goal" className="form-control" style={{marginRight: '5px'}}/>
                   <button onClick={() => this.addGoal()} className="btn btn-success" type="button">Submit</button>
               </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    console.log('state', state);
    return {
        user
    }
}


export default connect(mapStateToProps, null)(AddGoal);