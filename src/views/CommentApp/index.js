import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/CommentApp'
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

// 全局注入 store
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
