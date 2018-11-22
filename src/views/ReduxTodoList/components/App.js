import React from 'react'
import Header from '../containers/Header'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const styleObj = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
}

const App = () => (
  <div style={styleObj}>
    <Header />
    <VisibleTodoList></VisibleTodoList>
    <Footer />
  </div>
)

export default App
