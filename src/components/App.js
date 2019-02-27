import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialUsers, handleInitialQuestions } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import Poll from './Poll';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
    this.props.dispatch(handleInitialQuestions());
  }
  
  render() {
    const { userLoggedIn } = this.props;
    
    return (
      <Router>
        <div>
          <LoadingBar />
          {userLoggedIn === true
            ? <div>
                <Nav />
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={Poll} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </div>
            : <Login />
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    userLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
