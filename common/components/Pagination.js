import React from 'react'
import { Pager } from 'react-bootstrap'
import classNames from 'classnames'

const Pagination = ({
  pagination,
  onClickFirst,
  onClickBack,
  onClickNext,
  onClickLast
  }) => (
  <Pager>
    <Pager.Item
      className={ classNames({ 'disabled': !pagination.first }) }
      onClick={() => onClickFirst()}>
        {' |< '}
    </Pager.Item>
    {' '}
    <Pager.Item
      className={ classNames({ 'disabled': !pagination.back }) }
      onClick={() => onClickBack()}>
        {' < '}
    </Pager.Item>
    {' '}
    <Pager.Item
      className={ classNames({ 'disabled': !pagination.next }) }
      onClick={() => onClickNext()}>
        {' > '}
    </Pager.Item>
    {' '}
    <Pager.Item
      className={ classNames({ 'disabled': !pagination.last }) }
      onClick={() => onClickLast()}>
        {' >| '}
    </Pager.Item>
  </Pager>
);

export default Pagination