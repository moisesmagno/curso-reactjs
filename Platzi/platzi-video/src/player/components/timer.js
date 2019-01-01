import React from 'react';
import './timer.scss';

const Timer = (props) => {
  return (
    <div className="Timer">
      <p>
        <span>{props.currentTime} / {props.duration}</span>
      </p>
    </div>
  )
}

export default Timer;
