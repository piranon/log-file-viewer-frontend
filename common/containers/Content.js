import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadContent } from '../actions'
import { SearchBar, ContentList } from '../components'

class SearchBarContainer extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
    onLoadContent: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.contentFile !== nextProps.contentFile
  }

  onLoadContent = () => {
    this.props.onLoadContent()
  }

  render() {
    return (
      <div>
        <SearchBar onLoadContent={this.onLoadContent} />
        <ContentList content={this.props.content} />
      </div>
    )
  }
}

export default connect(
  (state) => ({ content: state.content }),
  { onLoadContent: loadContent }
)(SearchBarContainer)