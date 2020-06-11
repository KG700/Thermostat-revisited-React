import React from 'react';
import Button from 'react-bootstrap/Button';

const Controller = (props) => {
  return (
    <div>
      <Button
        variant="outline-secondary"
        size="sm"
      >{props.value}</Button>
    </div>
  )
}

export default Controller;
