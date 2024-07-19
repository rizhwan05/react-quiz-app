import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function ScorePopup({ score, total, onPlayAgain }) {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handlePlayAgain = () => {
        // Navigate to the home page
        navigate('/');
        if (onPlayAgain) {
            onPlayAgain(); // Call the provided callback if it exists
        }
    };

    return (
        <div className="score-popup">
            <h2>Your Score</h2>
            <p>You scored: <span id="quiz-score">{score}</span> out of <span id="total-score">{total}</span></p>
            <p>Thank you for taking the quiz!</p>
            <button className="play-again-button" onClick={handlePlayAgain}>Play Again</button>
        </div>
    );
}

export default ScorePopup;
