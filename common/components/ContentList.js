import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, ListGroup } from 'react-bootstrap';

const ContentList = ({ content }) => (
  <Jumbotron>
    <ListGroup>
      {
        content.map((list) => (
          <li className='list-group-item' key={list.list}>
            <span className="badge">{list.line}</span>{list.text}
          </li>
        ))
      }
    </ListGroup>
  </Jumbotron>
);

ContentList.propTypes = {
  content: PropTypes.array.isRequired
}

export default ContentList