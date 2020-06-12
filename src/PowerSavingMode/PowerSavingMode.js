import React from 'react';
import Form from 'react-bootstrap/Form';

const PowerSavingMode = (props) => {
  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          id="custome-switch"
          label="Power Saving Mode"
          onClick={props.click}
          checked
        />
      </Form>
    </div>
  )
}

export default PowerSavingMode;
