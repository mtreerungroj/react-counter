import React, { Component } from 'react'
import Counter from './Counter'
import IncButton from './IncButton'

class App extends Component {
  render () {
    return (
      <div>
        <Counter />
        <IncButton />
      </div>
    )
  }
}

export default App
