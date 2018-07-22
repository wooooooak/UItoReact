import * as React from 'react';
import styled, { keyframes } from 'styled-components';
// interface IProps {

// }

const StageWrapper = styled.div`
  width: 800px;
  height: 600px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background: #fff;
  filter: blur(10px) contrast(20);
`;

const Obj = styled.div`
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  position: absolute;
  border-radius: 50%;
  background: #000;
  transform: translate(-50%, -50%);
`;

const ani1 = keyframes`
  0%{left:30%; }
  50%{left:50%; }
  100%{left:30%; }
`;
const ani2 = keyframes`
  0%{left:70%; }
  50%{left:50%; }
  100%{left:70%; }
`;

const Obj1 = Obj.extend`
  left: 30%;
  animation: ${ani1} 3s ease infinite;
`;

const Obj2 = Obj.extend`
  left: 70%;
  animation: ${ani2} 3s ease infinite;
`;

const GoeeyEffect: React.SFC = ({}) => (
  <StageWrapper>
    <Obj1 />
    <Obj2 />
  </StageWrapper>
);

export default GoeeyEffect;
