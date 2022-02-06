import Home from "./pages/Home/Home.js";
import EmpowerPage from "./pages/Empower/EmpowerPage.js";
import BlogPage from "./pages/Blog/BlogPage.js";
import './App.css';
import history from './history';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/protected/Dashboard'
import { logout } from './helpers/auth.js'
import { firebaseAuth } from './config/constants'
import { Router, Route, Switch, BrowserRouter, Link, Redirect } from 'react-router-dom';
import { render } from "@testing-library/react";
import React, { Component } from 'react'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <div className="App">
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/Empower' exact>
            <EmpowerPage/>
          </Route>
          <Route path='/Blog' exact>
            <BlogPage/>
          </Route>
          <PublicRoute authed={this.state.authed} path='/SignIn' component={Login} />
          <PublicRoute authed={this.state.authed} path='/SignUp' component={Register} />
          <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </Router>
    </div>
    );
  }
}

