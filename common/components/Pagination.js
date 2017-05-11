import React from 'react'
import { Pager } from 'react-bootstrap';

const Pagination = () => (
  <Pager>
    <Pager.Item>{' |< '}</Pager.Item>
    {' '}
    <Pager.Item>{' < '}</Pager.Item>
    {' '}
    <Pager.Item>{' > '}</Pager.Item>
    {' '}
    <Pager.Item>{' >| '}</Pager.Item>
  </Pager>
);

export default Pagination