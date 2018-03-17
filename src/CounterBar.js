import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inc, reset, incWithDalay } from './actions'

class CounterBar extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.inc}>Inc</button>
        <button onClick={this.props.incWithDelay}>Inc with delay</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

let mapDispatchToProps = dispatch => {
  // dispatch is store.dispatch
  return {
    inc: () => dispatch(inc()),
    reset: () => dispatch(reset()),
    incWithDelay: () => dispatch(incWithDalay())
  }
}

export default connect(null, mapDispatchToProps)(CounterBar) // actually position null is mapStateToProps
