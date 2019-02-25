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
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        <div>
          <p>{`Hello ${this.props.authedUserName}`}</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
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