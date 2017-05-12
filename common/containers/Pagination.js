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

  onClickBack = () => {
    this.props.onLoadContent(this.props.pathFile, this.props.pagination.back)
  }

  onClickNext = () => {
    this.props.onLoadContent(this.props.pathFile, this.props.pagination.next)
  }

  render() {
    return <Pagination
      onClickBack={this.onClickBack}
      onClickNext={this.onClickNext} />
  }
}

export default connect(
  (state) => ({
    pagination: state.pagination,
    pathFile: state.pathFile
  }),
  { onLoadContent: loadContent }
)(PaginationContainer)