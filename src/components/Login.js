import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    value: ''
  }
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.value));
  };
  
  render() {
    const userIds = Object.keys(this.props.users);
    
    return (
      <div>
        <h1>Welcome to the Would You Rather App</h1>
        <h2>Please sign in to continue</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sign In
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={''}></option>
              {userIds.map(userId => (
                <option key={userId} value={userId}>{this.props.users[userId].name}</option>
              ))}
            </select>
          </label>
          <button type='submit'>Sign In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Login);