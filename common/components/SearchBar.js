import React from 'react'
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => (
  <FormGroup>
    <InputGroup>
      <FormControl type="text" placeholder="/path/to/file" />
      <InputGroup.Button>
        <Button bsStyle="primary">View</Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
);

export default SearchBar