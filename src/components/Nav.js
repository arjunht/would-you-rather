import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  };
  
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>
              Leader Board
            </NavLink>
          </li>
          <li>
            {`Hello, ${this.props.authedUserName} `}
            <button onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({users, authedUser}) {
  const authedUserName = users[authedUser].name;
  return {
    authedUserName
  };
}

export default connect(mapStateToProps)(Nav);