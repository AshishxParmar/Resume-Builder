import React from 'react';
import { Form } from 'react-bootstrap';

const userHobby = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>userHobby</h3>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};

export default userHobby;
