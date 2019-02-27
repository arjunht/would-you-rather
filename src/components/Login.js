import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

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
    const { users } = this.props;
    const { value } = this.state;

    const userIds = Object.keys(users);

    if (!Array.isArray(userIds) || !userIds.length) {
      return null;
    }
    
    return (
      <div>
        <form className='center' onSubmit={this.handleSubmit}>
          <h1>Welcome to the Would You Rather App</h1>
          <h2>Please sign in to continue</h2>
          <label>
            <p>Sign In</p>
            <select value={value} onChange={this.handleChange}>
              <option value={''}></option>
              {userIds.map(userId => (
                <option key={userId} value={userId}>{users[userId].name}</option>
              ))}
            </select>
          </label>
          <br />
          <button className='btn' type='submit' disabled={value === ''}>Sign In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Login);