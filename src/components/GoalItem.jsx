import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
   

    render() {
        const { email, title } = this.props.goal;
        return (
            <div style={{ margin: '5px' }}>
                <strong>{title}</strong>
                <span>  submited by <em> {email}</em></span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);