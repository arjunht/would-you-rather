import React from 'react';
import Question from './Question';

const QuestionsList = (props) => {
  return (
    <div>
      <ul>
        {props.questionIds.map(id =>
          <Question key={id} id={id} />
        )}
      </ul>
    </div>
  );
}

export default QuestionsList;