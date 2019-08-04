import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gigs from "./pages/gigs/Gigs";
import DJs from "./pages/djs/DJs";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "./redux/reducer"

import "./App.css";

var firebaseConfig = {
    apiKey: "AIzaSyAPThA_o-fCWAFWbTKmxAgxLwIOUrV3XDg",
    authDomain: "ranky-b627b.firebaseapp.com",
    databaseURL: "https://ranky-b627b.firebaseio.com",
    projectId: "ranky-b627b",
    storageBucket: "ranky-b627b.appspot.com",
    messagingSenderId: "102594017401",
    appId: "1:102594017401:web:a1c2eff7534c90b9"
};

firebase.initializeApp(firebaseConfig)

const store = createStore(reducers)

class App extends Component{

    render() {


        return (
            <Provider store={store}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/gigs" component={Gigs} />
                <Route path="/djs" component={DJs} />
            </Router>
            </Provider>
        );
    }
}

export default App;
