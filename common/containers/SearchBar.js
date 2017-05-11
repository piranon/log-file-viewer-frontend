import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { loadContent } from '../actions'
import { SearchBar } from '../components'

class SearchBarContainer extends Component {
  render() {
    return <SearchBar handleSubmit={this.props.handleSubmit}/>
  }
}

const validate = values => {
  const errors = {}
  if (!values.pathFile) {
    errors.pathFile = 'Enter a path file.'
  }
  return errors
}

export default reduxForm({
  form: 'content',
  validate,
  onSubmit: (values, dispatch) => {
    return dispatch(loadContent(values.pathFile))
  }
})(SearchBarContainer)