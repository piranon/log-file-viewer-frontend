import React from 'react'
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContentList = () => (
  <Jumbotron>
  <ListGroup>
    <ListGroupItem>
      <span className="badge">1</span>Item 1
    </ListGroupItem>
    <ListGroupItem>
      <span className="badge">2</span>Item 2
    </ListGroupItem>
    <ListGroupItem>
      <span className="badge">3</span>Item 3
    </ListGroupItem>
    <ListGroupItem>
      <span className="badge">4</span>Item 4
    </ListGroupItem>
    <ListGroupItem>
      <span className="badge">5</span>Item 5
    </ListGroupItem>
  </ListGroup>
  </Jumbotron>
);

export default ContentList