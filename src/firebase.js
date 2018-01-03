import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAn5_iodvHA9BnPkJfN0VKFUoqjH1cFrj4",
    authDomain: "goalcoach-dd3f0.firebaseapp.com",
    databaseURL: "https://goalcoach-dd3f0.firebaseio.com",
    projectId: "goalcoach-dd3f0",
    storageBucket: "goalcoach-dd3f0.appspot.com",
    messagingSenderId: "652554332858"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');