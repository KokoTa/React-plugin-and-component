import React, { PureComponent } from 'react'
import {
  HomeWrap,
  HomeTitle,
  HomeDescription
} from './style.js';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrap>
        <HomeTitle>React Show</HomeTitle>
        <HomeDescription>Show some components and test demos when learning react. </HomeDescription>
        <HomeDescription>Keep memory if i have the amnesia =_=</HomeDescription>
      </HomeWrap>
    )
  }
}

export default Home;
