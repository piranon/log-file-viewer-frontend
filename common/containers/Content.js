import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchBar, ContentList } from '../components'

class ContentContainer extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.content !== nextProps.content
  }

  onLoadContent = () => {
    this.props.onLoadContent()
  }

  render() {
    return <ContentList content={this.props.content} />
  }
}

export default connect(
  (state) => ({ content: state.content }),
  {}
)(ContentContainer)