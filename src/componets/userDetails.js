import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

function userDetails() {
  return (
    <div>
      userDetails
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <FormControl aria-label="First name" />
        <FormControl aria-label="Last name" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <FormControl aria-label="First name" />
        <FormControl aria-label="Last name" />
      </InputGroup>
    </div>
  );
}

export default userDetails;
