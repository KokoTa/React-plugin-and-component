import styled from 'styled-components';

export const GallaryWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: lightblue;
  overflow: hidden;
`;
export const ImgWrap = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 175px);
  background: #fff;
  transition: all 1s ease;
  transform-origin: 50% 50%;
  cursor: pointer;
  border: 5px solid lightpink;
  border-radius: 10px;
`;
export const ImgItem = styled.img`
  display: block;
  width: 80%;
  height: 200px;
  margin: 40px auto;
`;
export const ImgTitle = styled.h3`
  color: lightgray;
  font-size: 20px;
  text-align: center;
`;