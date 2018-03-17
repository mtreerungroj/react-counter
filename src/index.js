import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counterDOS from './middlewares/counterDOS'
import actionDelay from './middlewares/actionDelay'
import counter from './reducers/counter'

let store = createStore(counter, applyMiddleware(counterDOS, actionDelay))
// setInterval(() => store.dispatch({ type: 'INCREMENT', by: 1 }), 1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// use Provider to allow App access store
