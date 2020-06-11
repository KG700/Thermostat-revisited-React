import React from 'react';

const Temperature = (props) => {
  return (
    <div>
      <h1 className="temperature">{props.value}</h1>
    </div>
  )
}

export default Temperature;
