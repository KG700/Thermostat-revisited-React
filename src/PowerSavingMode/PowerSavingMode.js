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
          onChange={props.click}
          defaultChecked={props.checked}
        />
      </Form>
    </div>
  )
}

export default PowerSavingMode;
