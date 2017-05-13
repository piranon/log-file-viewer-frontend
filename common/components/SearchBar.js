import React from 'react'
import PropTypes from 'prop-types'
import { Alert, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

const renderError = (errors) => errors.pathFile ?
  <Alert bsStyle="danger">{errors.pathFile}</Alert> : false

const SearchBar = ({ errors, handelSubmit, onPathFileChange }) => (
  <div>
    <FormGroup>
      <InputGroup>
        <input
          autoComplete='off'
          className='form-control'
          id='pathFile'
          placeholder='/path/to/file'
          type='text'
          onChange={onPathFileChange}
        />
        <InputGroup.Button>
          <Button
            bsStyle='primary'
            type='submit'
            onClick={() => handelSubmit()} >
            Submit
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
    {renderError(errors)}
  </div>
);

SearchBar.propTypes = {
  errors: PropTypes.object.isRequired,
  handelSubmit: PropTypes.func.isRequired,
  onPathFileChange: PropTypes.func.isRequired
}

export default SearchBar