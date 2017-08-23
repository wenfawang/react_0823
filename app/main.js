import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route,hashHistory } from 'react-router';
// import createHashHistory from 'history/createHashHistory';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import UserAdd from './page/UserAdd.js';
import Home from './page/Home.js';
// import reducers from './reducers.js'

// const history = createHashHistory();
// const store = createStore(reducers)

ReactDOM.render((
    // <Router history={hashHistory}>
    //     <Route path="/" component={Home}>
    //      <Route path="/user/add" component={UserAdd}/>
    //     </ROute>
    // </Router>
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/user/add" component={UserAdd}/>
        </Switch>
    </Router>
),
  document.getElementById('app')
);