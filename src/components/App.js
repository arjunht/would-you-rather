import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUsers } from '../actions/shared';
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
  }
  
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
