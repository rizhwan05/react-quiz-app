import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [time, onTimeUp]);

  return <div className="timer">Time Left: <span className="timer-display">{`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</span></div>;
};

export default Timer;
