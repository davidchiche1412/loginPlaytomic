import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import Signin from './components/signin'

function state() {
  }

const store = createStore(state)

render(
  <Provider store={store}>
    <Signin />
  </Provider>,
  document.getElementById('root')
)



