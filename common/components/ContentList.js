import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContentList = ({ content }) => (
  <Jumbotron>
    <ListGroup>
      {
        content.map(([key, value]) => (
          <ListGroupItem>
            <span className="badge">key</span>value
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