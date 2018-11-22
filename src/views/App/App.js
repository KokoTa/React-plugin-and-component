import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  LeftWrap,
  LeftHeader,
  LeftContent,
  LeftList,
  LeftItem,
  RightWrap,
} from './style.js';
import './App.css';
import Home from '../Home';
import Gallary from '../Gallary';
import ReduxTodoList from '../ReduxTodoList';
import list from './config.js';



class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      targetIndex: null,
    }
  }

  changeTarget = (index) => {
    this.setState({ targetIndex: index });
  }

  render() {
    const { targetIndex } = this.state;

    return (
      <div className="App">
        <Router>
          <Fragment>
            <LeftWrap>
              <LeftHeader onClick={() => this.changeTarget(-1)}>
                <Link className="link" to="/">Catalog</Link>
              </LeftHeader>
              <LeftContent>
                <LeftList>
                  {
                    list.map((name, index) => {
                      return (
                        <LeftItem
                          className={targetIndex === index ? "active" : ''}
                          key={index}
                          onClick={() => this.changeTarget(index)}>
                          <Link
                            className="link"
                            to={`/${name}`}>
                            {name}
                          </Link>
                        </LeftItem>
                      )
                    })
                  }
                </LeftList>
              </LeftContent>
            </LeftWrap>
            {/* 路由过渡讲解：https://tylermcginnis.com/react-router-animated-transitions/ */}
            {/* 注意：过渡页需要绝对定位，这个和 Vue 的路由过渡一样 */}
            <RightWrap>
              <Route render={({location}) => (
                // 通过 TransitionGroup 来监听 CSSTransition 的变化时需要提供一个 key 来作为唯一识别
                <TransitionGroup>
                  <CSSTransition classNames="fade" timeout={250} key={location.key}>
                    {/* 切换路由时我们发现过渡状态下，两个 Switch 的 location 都一样(过渡时会有两个同结构的 DOM)，因为此时的 location 获取的是 "全局" location */}
                    {/* 这导致了两个 Switch 都渲染了同样的内容，并且因为都长得一样，导致了过渡无效（淡入淡出叠在一起的都是同样的内容） */}
                    {/* 因此这里我们使用了 Route 的 location，当我们路由切换时会传给旧 Switch 旧值、传给新 Switch 新值，这样就可以避免两个 Switch 渲染同样的内容 */}
                    <Switch location={location}>
                      <Route path="/" exact component={Home}></Route>
                      <Route path="/Gallary" component={Gallary}></Route>
                      <Route path="/ReduxTodoList" component={ReduxTodoList}></Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}></Route>
            </RightWrap>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
