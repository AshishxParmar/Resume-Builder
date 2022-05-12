import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

function userAbout() {
  return (
    <div>
      userAbout
      <>
        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <FormControl aria-label="Text input with radio button" />
        </InputGroup>
      </>
    </div>
  );
}

export default userAbout;
