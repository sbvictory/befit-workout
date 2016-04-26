import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, Redirect } from 'react-router'
import auth from './components/auth/auth';
import About from './components/About.js';
import Dashboard from './components/Dashboard.js';
import Logout from './components/auth/Logout';
import Login from './components/auth/Login';
import App from './components/App.js';
import Category from './components/sidebar/Category';
import CategorySidebar from './components/sidebar/CategorySidebar';
import Item from './components/sidebar/Item';
import Schedule from './components/Schedule';
import Leadboard from './components/leadboard/Leadboard';
import Pie from './components/leadboard/Pie'
import Area from './components/leadboard/Area'
import HBar from './components/leadboard/HBar'

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="logout" component={Logout}/>
            <Route path="about" component={About}/>
            <Route path="dashboard" component={Dashboard} onEnter={requireAuth}>
                <Redirect from="category/Schedule" to="/dashboard/Schedule"/>
                <Redirect from="category/Leadboard" to="/dashboard/Leadboard"/>
                <Route path="category/:category">
                    <Route path=":itemId"/>
                </Route>
                <Route path="/dashboard/Schedule" components={{ schedule: Schedule}}/>
                <Route path="/dashboard/Leadboard" components={{ leadboard: Leadboard}}>
                    <Route path="HBar" component={HBar}/>
                </Route>
            </Route>
        </Route>
        <Route path="login" component={Login}/>
    </Router>
), document.getElementById('app'));
