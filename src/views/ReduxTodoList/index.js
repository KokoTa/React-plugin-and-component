import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './actions/MySaga'
import App from './components/App'
import rootReducer from './reducers'

// 这里是固定写法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, saga)
))

saga.run(mySaga)

// 全局注入 store
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
