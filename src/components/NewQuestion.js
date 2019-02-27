import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (e) => {
    e.target.name === 'optionOne'
      ? this.setState({ optionOne: e.target.value })
      : this.setState({ optionTwo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    
    dispatch(handleSaveQuestion(
      optionOne, optionTwo));
    
    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    });
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if(toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <h1>Create New Question</h1>
          <hr />
          <p>Complete the question</p>
          <h2>Would you rather ...</h2>
          <div>
            <input
              name='optionOne'
              type='text'
              placeholder='Enter Option One text Here'
              value={optionOne}
              onChange={this.handleChange}
            />
          </div>
          <p>OR</p>
          <div>
            <input
              name='optionTwo'
              type='text'
              placeholder='Enter Option Two text Here'
              value={optionTwo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button className='btn' type='submit' disabled={optionOne === '' || optionTwo === ''}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);