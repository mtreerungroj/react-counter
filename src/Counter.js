import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  state = { green: false }

  componentWillReceiveProps (nextProps) {
    if (nextProps.val > this.props.val) {
      this.setState({ green: true })
    } else {
      this.setState({ green: false })
    }
  }

  componentDidUpdate () {
    // after completely update component, may occurs in many situations
    if (this.state.green) {
      if (this.__prevTimeout) {
        clearTimeout(this.__prevTimeout)
      }
      this.__prevTimeout = setTimeout(
        () => this.setState({ green: false }),
        2000
      )
    }
  }

  render () {
    return (
      <div style={{ color: this.state.green ? 'lightgreen' : 'black' }}>
        {this.props.val}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return { val: state.val } // map state in name val
}

export default connect(mapStateToProps)(Counter)
