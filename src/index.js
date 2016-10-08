import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Home from './components/Home/Home'
import * as errors from './utils/errors.js'

errors();

ReactDOM.render(
  <App><Home /></App>,
  document.getElementById('root')
)
