import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContentList = ({ content }) => (
  <Jumbotron>
    <ListGroup>
      {
        content.map((list) => (
          <ListGroupItem key={list.line}>
            <span className="badge">{list.line}</span>{list.text}
          </ListGroupItem>
        ))
      }
    </ListGroup>
  </Jumbotron>
);

ContentList.propTypes = {
  content: PropTypes.array.isRequired
}

export default ContentList