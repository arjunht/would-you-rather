import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const LeaderBoard = (props) => {
  return (
    <div>
      <h1 className='center'>Leader Board</h1>
      <ol>
        {props.userIds.map(id =>
          <User key={id} id={id} />
        )}
      </ol>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => 
            (Object.keys(users[b].answers).length + users[b].questions.length) -
            (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(LeaderBoard);