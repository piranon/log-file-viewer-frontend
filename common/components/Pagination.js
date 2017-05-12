import React from 'react'
import { Pager } from 'react-bootstrap'
import classNames from 'classnames'

const Pagination = ({ pagination, onClickBack, onClickNext }) => (
  <Pager>
    <Pager.Item>{' |< '}</Pager.Item>
    {' '}
    <Pager.Item
      className={ classNames({ 'disabled': !pagination.back }) }
      onClick={() => onClickBack()}>
        {' < '}
    </Pager.Item>
    {' '}
    <Pager.Item
      className={ classNames({ 'disabled': !pagination.next }) }
      onClick={() => onClickNext()}>{' > '}</Pager.Item>
    {' '}
    <Pager.Item>{' >| '}</Pager.Item>
  </Pager>
);

export default Pagination