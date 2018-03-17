import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render () {
    return <div>{this.props.val}</div>
  }
}

let mapStateToProps = state => {
  return { val: state.val } // map state in name val
}

export default connect(mapStateToProps)(Counter)
