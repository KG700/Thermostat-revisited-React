import React from 'react';
import classes from './Temperature.module.css';

const Temperature = (props) => {
  return (
    <div className={classes.Temperature}>
        {props.value}
    </div>
  )
}

export default Temperature;
