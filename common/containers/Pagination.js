import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadContent } from '../actions'
import { Pagination } from '../components'

class PaginationContainer extends Component {
  static propTypes = {
    pagination: PropTypes.object.isRequired,
    pathFile: PropTypes.string.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pagination !== nextProps.pagination
  }

  onClickFirst = () => {
    if (this.props.pagination.first)
      this.props.onLoadContent(this.props.pathFile, this.props.pagination.first)
  }

  onClickBack = () => {
    if (this.props.pagination.back)
      this.props.onLoadContent(this.props.pathFile, this.props.pagination.back)
  }

  onClickNext = () => {
    if (this.props.pagination.next)
      this.props.onLoadContent(this.props.pathFile, this.props.pagination.next)
  }

  onClickLast = () => {
    if (this.props.pagination.last)
      this.props.onLoadContent(this.props.pathFile, this.props.pagination.last)
  }

  render() {
    return <Pagination
      pagination={this.props.pagination}
      onClickFirst={this.onClickFirst}
      onClickBack={this.onClickBack}
      onClickNext={this.onClickNext}
      onClickLast={this.onClickLast} />
  }
}

export default connect(
  (state) => ({
    pathFile: state.form.fields && state.form.fields.pathFile || '',
    pagination: state.pagination
  }),
  { onLoadContent: loadContent }
)(PaginationContainer)