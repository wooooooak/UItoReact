import * as React from 'react';
import styled from 'styled-components';
// interface IProps {

// }

const StageWrapper = styled.div`
  width: 800px;
  height: 600px;
  top: 40%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background: #fff;
  filter: blur(10px) contrast(20);
`;
const GoeeyEffect: React.SFC = ({}) => <StageWrapper />;

export default GoeeyEffect;
