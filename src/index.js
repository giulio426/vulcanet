import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)
//Define the entr point to react and redux
render(
  <Provider store={store}>
    {/* Define the store with de state off all aplication */}
    <App />
  </Provider>,
  document.getElementById('root')
)
