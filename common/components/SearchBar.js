import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Alert, InputGroup, Button } from 'react-bootstrap';

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <Alert bsStyle="danger">{error}</Alert> : false

const SearchBar = ({ handleSubmit }) => (
  <div>
  <form onSubmit={handleSubmit} className='form-group'>
    <InputGroup>
      <Field
        className='form-control'
        component='input'
        name='pathFile'
        placeholder='/path/to/file'
        type='text' />
      <InputGroup.Button>
        <Button
          bsStyle='primary'
          type='submit'>
          Submit
        </Button>
      </InputGroup.Button>
    </InputGroup>
  </form>
  <Field name="pathFile" component={renderError}/>
    </div>
);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SearchBar