import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUsers, handleInitialQuestions } from '../actions/shared';
import Login from './Login'
// import Dashboard from './Dashboard'
// import Poll from './Poll'
// import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
    this.props.dispatch(handleInitialQuestions());
  }
  
  render() {
    const { loadingBar, userLoggedIn } = this.props;
    
    return (
      <div>
        <LoadingBar />
        {(Object.keys(loadingBar).length === 0 && loadingBar.constructor === Object) || loadingBar.default !== 0
          ? null
          : userLoggedIn === true
            ? <LeaderBoard />
            : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    userLoggedIn: authedUser !== null,
    loadingBar
  }
}

export default connect(mapStateToProps)(App);
