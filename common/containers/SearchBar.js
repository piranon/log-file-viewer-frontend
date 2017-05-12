import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadContent, pathFileChange, setPathFileError } from '../actions'
import { SearchBar } from '../components'

class SearchBarContainer extends Component {

  handelSubmit = () => {
    let form = this.props.form

    if (!form || !form.fields || !form.fields.pathFile) {
      this.props.setPathFileError('Please enter a path to file.')
      return false
    }

    this.props.onLoadContent(form.fields.pathFile)
  }

  onPathFileChange = (event) => {
    if (event.target.value)
      this.props.setPathFileError()

    this.props.onPathFileChange(event.target.value)
  }

  render() {
    return (
      <SearchBar
        errors={this.props.form.errors}
        handelSubmit={this.handelSubmit}
        onPathFileChange={this.onPathFileChange}
      />
    )
  }
}

export default connect(
  (state) => {
    return { form: state.form }
  },
  {
    onLoadContent: loadContent,
    onPathFileChange: pathFileChange,
    setPathFileError: setPathFileError
  }
)(SearchBarContainer)