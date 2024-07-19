import React, { useState, useEffect } from 'react';
import questions from '../questions';
import ScorePopup from './ScorePopup';

function Quiz() {
    const [currentPage, setCurrentPage] = useState(1);
    const [userAnswers, setUserAnswers] = useState({});
    const [scorePopup, setScorePopup] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); // 1 minute for each page

    const questionsPerPage = 5;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentPage]);

    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = currentPage * questionsPerPage;

    const handleOptionChange = (questionIndex, answer) => {
        setUserAnswers({ ...userAnswers, [questionIndex]: answer });
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const handleSubmit = () => {
        setScorePopup(true);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev') {
            setCurrentPage(currentPage - 1);
        }
        setTimeLeft(60);
    };

    return (
        <div>
            <div className="quiz-container">
                {questions.slice(startIndex, endIndex).map((question, index) => (
                    <div key={index} className="card">
                        <div className="question">
                            <h2>{question.question}</h2>
                        </div>
                        <div className="options">
                            {question.options.map((option, optionIndex) => (
                                <label key={optionIndex}>
                                    <input
                                        type="radio"
                                        name={`question${startIndex + index}`}
                                        value={option}
                                        onChange={() => handleOptionChange(startIndex + index, option)}
                                        checked={userAnswers[startIndex + index] === option}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination-container">
                {Array.from({ length: Math.ceil(questions.length / questionsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        className="pagination-button"
                        onClick={() => setCurrentPage(i + 1)}
                        disabled={currentPage === i + 1}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <div className="navigation-buttons">
                <button
                    className="nav-button"
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {currentPage < Math.ceil(questions.length / questionsPerPage) ? (
                    <button className="nav-button" onClick={() => handlePageChange('next')}>
                        Next
                    </button>
                ) : (
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                )}
            </div>
            <div className="timer">
                Time Left: <span className="timer-display">{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</span>
            </div>
            {scorePopup && (
                <ScorePopup score={calculateScore()} total={questions.length} onPlayAgain={() => setScorePopup(false)} />
            )}
        </div>
    );
}

export default Quiz;
