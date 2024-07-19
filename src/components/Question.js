import React from 'react';

const Question = ({ index, question, options, handleAnswer }) => {
  return (
    <div className="card">
      <div className="question">
        <h2>{question}</h2>
      </div>
      <div className="options">
        {options.map((option, i) => (
          <label key={i}>
            <input type="radio" name={`question${index}`} value={option} onClick={() => handleAnswer(index, option)} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
