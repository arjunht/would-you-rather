import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e) => {
    e.target.name === 'optionOne'
      ? this.setState({ optionOne: e.target.value })
      : this.setState({ optionTwo: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    return (
      <div>
        <h1>Create New Question</h1>
        <hr />
        <p>Complete the question</p>
        <h2>Would you rather ...</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name='optionOne'
              type='text'
              placeholder='Enter Option One text Here'
              value={this.state.optionOne}
              onChange={this.handleChange}
            />
          </div>
          <p>OR</p>
          <div>
            <input
              name='optionTwo'
              type='text'
              placeholder='Enter Option Two text Here'
              value={this.state.optionTwo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type='submit' disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);