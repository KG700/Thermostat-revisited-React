import React from 'react';
import './Temperature.css';

const Temperature = (props) => {
  return (
    <div className="Temperature">
        {props.value}
    </div>
  )
}

export default Temperature;
