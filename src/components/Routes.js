import React, { Component } from 'react'
//React Router
import { Route, Switch } from 'react-router-dom'
//import Landing from '../pages/landing/Landing'
import Newsfeed from '../pages/Newsfeed'
import Messages from '../pages/Messages'
import Watch from '../pages/Watch'
import Profile from '../pages/Profile'
import Store from '../pages/Store'
//import SignUp from '../pages/signup/SignUp'

class Routes extends Component {
  render() {
    return (
      <section className="content main-content">
        <Switch>
          <Route exact path='/' component={Newsfeed} />
          <Route exact path='/Newsfeed' component={Newsfeed} />
          <Route exact path='/Messages' component={Messages} />
          <Route exact path='/Watch' component={Watch} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Store' component={Store} />
        </Switch>
      </section>
    );
  }
}

export default Routes
