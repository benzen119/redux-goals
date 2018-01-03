import React from  'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Router, Route, browserHistory } from 'react-router'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { logUser, setGoals, setCompleted} from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('User has signed in or signed up.', user)
        browserHistory.push('/app');
        const { email } = user;
        store.dispatch(logUser(email));
    }
    else{
        // console.log("User has signed out or still needs to sign in.")
        // browserHistory.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
        </Router>
    </Provider>,
     document.getElementById('root')
)