import styled from 'styled-components';

export const LeftWrap  = styled.div`
  width: 200px;
  height: 100%;
  background: purple;
  overflow: auto;
  color: #fff;
  float: left;
`;

export const LeftHeader = styled.h1`
  text-align: center;
`;

export const LeftContent = styled.div`

`;

export const LeftList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LeftItem = styled.li`
  font-size: 18px;
  text-align: center;
  transition: all .25s ease;
`;

export const RightWrap = styled.div`
  position: relative;
  min-width: 1000px;
  height: 100%;
  margin-left: 200px;
  overflow: auto;
`;