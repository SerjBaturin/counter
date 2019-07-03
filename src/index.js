import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './mainReducer'
const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app'))