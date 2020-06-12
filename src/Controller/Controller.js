import React from 'react';
import Button from 'react-bootstrap/Button';

const Controller = (props) => {
  return (
    <div>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={props.click}
      >{props.value}</Button>
    </div>
  )
}

export default Controller;
