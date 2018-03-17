import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

let reducer = (state = { val: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { val: state.val + action.by }
  } else if (action.type === 'RESET') {
    return { val: 0 }
  }
  return state
}

// store อันไหน, next ให้ไปต่อหรือไม่, action ที่จะเรียกคืออะไร
let middleware = store => next => action => {
  if (store.getState().val < 5) {
    next(action)
  }
}

let store = createStore(reducer, applyMiddleware(middleware))
// setInterval(() => store.dispatch({ type: 'INCREMENT', by: 1 }), 1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// use Provider to allow App access store
