import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inc } from './action'

class IncButton extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.inc}>Click</button>
      </div>
    )
  }
}

let mapDispatchToProps = dispatch => {
  // dispatch is store.dispatch
  return {
    inc: () => dispatch(inc())
  }
}

export default connect(null, mapDispatchToProps)(IncButton) // actually position null is mapStateToProps
