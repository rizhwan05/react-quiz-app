import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <div className="heading">
                <h1>Quiz App</h1>
            </div>
            <div className="Rules_box">
                <div className="info-list">
                    <div className="info">1. You will have only <span>1 minute</span> per each page.</div>
                    <div className="info">2. You can't select any option once time goes off.</div>
                    <div className="info">3. You can't exit from the Quiz while you're playing.</div>
                    <div className="info">4. You'll get points on the basis of your correct answers.</div>
                </div>
                <div className="nxt-btn">
                    <Link to="/quiz"><button className="start-btn">Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
