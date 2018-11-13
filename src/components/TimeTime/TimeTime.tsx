import * as React from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
`;
const Item1 = styled.span``;
const Item2 = styled.span``;
const CarouselItem = styled.div`
  position: absolute;
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;
const Container = styled.div`
  background-color: #000;
  color: white;
  width: 10rem;
  height: 10rem;
  position: relative;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.5rem 0 rgba(black, 0.5), 0 0 0.1rem 0 rgba(255, 255, 255, 0.5);
  overflow: hidden;
  display: grid;
  justify-content: center;
  align-content: center;
`;
const Time = styled.div``;
const Arrow = styled.a``;
const ArrowPrev = styled(Arrow)``;
const ArrowNext = styled(Arrow)``;

const TimeTime: React.SFC<{}> = () => (
  <CarouselWrapper>
    <Item1 />
    <Item2 />
    <CarouselItem>
      <Container>
        <Time>
          t<span>:</span>me
        </Time>
      </Container>
      <Arrow />
      <ArrowPrev />
      <ArrowNext />
    </CarouselItem>
  </CarouselWrapper>
);

export default TimeTime;
