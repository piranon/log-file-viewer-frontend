import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

const Counter = ({increment, incrementIfOdd, incrementAsync, decrement, counter}) => (
  <p>
    Clicked: {counter} times
    {' '}
    <Button bsStyle="primary" onClick={increment}>+</Button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
  </p>
)

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
