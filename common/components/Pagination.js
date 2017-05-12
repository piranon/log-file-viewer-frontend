import React from 'react'
import { Pager } from 'react-bootstrap';

const Pagination = ({ onClickBack, onClickNext }) => (
  <Pager>
    <Pager.Item>{' |< '}</Pager.Item>
    {' '}
    <Pager.Item onClick={() => onClickBack()}>{' < '}</Pager.Item>
    {' '}
    <Pager.Item onClick={() => onClickNext()}>{' > '}</Pager.Item>
    {' '}
    <Pager.Item>{' >| '}</Pager.Item>
  </Pager>
);

export default Pagination