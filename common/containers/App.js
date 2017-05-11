import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Header, SearchBar, Counter } from '../components'
import * as CounterActions from '../actions'
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/style.scss'

const App = (props) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Counter
        increment={props.increment}
        incrementIfOdd={props.incrementIfOdd}
        incrementAsync={props.incrementAsync}
        decrement={props.decrement}
        counter={props.counter} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
