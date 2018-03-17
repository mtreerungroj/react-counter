import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let reducer = (state = { val: 0 }, action) => {
  if (action === 'INCREMENT') {
    return { val: state.val + action.by }
  }
  return state
}
let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// use Provider to allow App access store
