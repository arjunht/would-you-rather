import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUsers, handleInitialQuestions } from '../actions/shared';
import Login from './Login'
// import Dashboard from './Dashboard'
// import Poll from './Poll'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
    this.props.dispatch(handleInitialQuestions());
  }
  
  render() {
    return (
      <div>
        {this.props.userLoggedIn === true
          ? <NewQuestion />
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
