import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUsers } from '../actions/shared';
import Login from './Login'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
  }
  
  render() {
    return (
      <div>
        {this.props.userLoggedIn === true
          ? <Dashboard />
          : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    userLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
