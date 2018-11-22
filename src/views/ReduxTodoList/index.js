import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

// 第二个参数用于使 chrome redux-devtools-extension 生效
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// 全局注入 store
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
