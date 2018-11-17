import React, { PureComponent } from 'react';
import {
  GallaryWrap,
  ImgWrap,
  ImgItem,
  ImgTitle
} from './style';

class Gallary extends PureComponent {
  constructor(props) {
    super(props);
    this.gallaryWrap = React.createRef(); // 画框
    this.imgWraps = []; // 图片框
  }

  addImgWrap = (el) => { // 获取 DOM
    this.imgWraps.push(el);
  }

  randomPosition = () => { // 随机位置
    // 画框尺寸
    const gWidth = this.gallaryWrap.current.offsetWidth;
    const gHeight = this.gallaryWrap.current.offsetHeight;
    // 图片框尺寸
    const iWidth = this.imgWraps[0].offsetWidth;
    const iHeight = this.imgWraps[0].offsetHeight;
    // 让图片可显示的极端大小为图片框的 1/4，获取边界值
    const minLeft = -iWidth / 2;
    const minTop = -iHeight / 2;
    const maxLeft = gWidth - iWidth / 2;
    const maxTop = gHeight - iHeight / 2;
    // 获取安全值并返回
    const left = Math.floor(Math.random() * (maxLeft + (-minLeft)) + minLeft);
    const top = Math.floor(Math.random() * (maxTop + (-minTop)) + minTop);
    const rotate = Math.floor(Math.random() * 180 - 90);
    return { left, top, rotate };
  }

  randomImg = () => { // 赋予随机位置
    this.imgWraps.forEach((item) => {
      const pos = this.randomPosition();
      item.style.left = `${pos.left}px`;
      item.style.top = `${pos.top}px`;
      item.style.transform = `rotate(${pos.rotate}deg)`;
      item.style['z-index'] = 1;
    });
  }

  getCurrent = (e) => {
    this.randomImg();
    // 对选中的图框进行居中
    const target = e.currentTarget;
    target.style.left = 'calc(50% - 150px)';
    target.style.top = 'calc(50% - 175px)';
    target.style.transform = 'rotate(0deg)';
    target.style['z-index'] = 2;
  }

  componentDidMount() {
    setTimeout(() => { // 等待页面过渡结束后再设置过渡，不然会有卡顿
      this.randomImg();
    }, 500);
  }

  render() {
    return (
      <GallaryWrap ref={this.gallaryWrap}>
        {
          Array(20).fill(null).map((item, index) => {
            return (
              <ImgWrap key={index} ref={this.addImgWrap} onClick={(e) => this.getCurrent(e)}>
                <ImgItem src={require(`../../assets/${index % 10}.jpg`)} alt={index}></ImgItem>
                <ImgTitle>Beautiful day of life</ImgTitle>
              </ImgWrap>
            )
          })
        }
      </GallaryWrap>
    )
  }
}

export default Gallary;