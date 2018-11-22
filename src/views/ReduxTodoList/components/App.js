import React from 'react'
import styled from 'styled-components'
import Header from '../containers/Header'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const App = () => (
  <Wrap>
    <Header />
    <VisibleTodoList />
    <Footer />
  </Wrap>
)

export default App
