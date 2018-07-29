import * as React from 'react';
import styled, { keyframes } from 'styled-components';
// import styled from 'styled-components';

const changeColor = keyframes`
  0% {
    color: dodgerblue;
  }
  50% {
    color: lightgreen;
  }
  100% {
    color: dodgerblue;
  }
`;

const moving = keyframes`
  0%{
    filter: opacity(0);
    transform: rotate(-180deg);
    /* left로 위치를 지정하여 날라오는 효과를 부여 */
    left: 100%;
  }
  33% {
		filter: opacity(1);
		transform: rotate(0deg);
		left: 60%;
	}

	66% {
		filter: opacity(1);
		transform: rotate(0deg);
		left: 40%;
	}

	100% {
		filter: opacity(0);
		transform: rotate(180deg);
		left: 0;
	}
`;

const Body = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
`;

const Loader = styled.div`
  color: dodgerblue;
  font-size: 1.5em;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 30em;
  height: 3em;
  animation: ${changeColor} 10s linear infinite;
`;

const Span = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n)-10) * 0.2s);
  position: absolute;
  height: 3em;

  &:nth-child(1) {
    --n: 1;
  }
  &:nth-child(2) {
    --n: 2;
  }
  &:nth-child(3) {
    --n: 3;
  }
  &:nth-child(4) {
    --n: 4;
  }
  &:nth-child(5) {
    --n: 5;
  }
  &:nth-child(6) {
    --n: 6;
  }
  &:nth-child(7) {
    --n: 7;
  }
`;

const TextFadeLoader: React.SFC = () => (
  <Body>
    <Loader>
      <Span>l</Span>
      <Span>o</Span>
      <Span>a</Span>
      <Span>d</Span>
      <Span>i</Span>
      <Span>n</Span>
      <Span>g</Span>
    </Loader>
  </Body>
);

export default TextFadeLoader;
