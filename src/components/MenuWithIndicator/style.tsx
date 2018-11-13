import styled from "styled-components";
import styledTS from "styled-components-ts";

export const Background = styled.div`
  background: #1d1d31;
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const VerticalMenuWrapper = styled.div`
  max-width: 230px;
  margin: 60px auto;
  display: flex;
  position: relative;
`;

export const VerticalMenu = styled.ul`
  text-transform: uppercase;
  width: 220px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const VerticalMenuItem = styled.li`
  font-size: 1.1em;
  color: #fff;
  transition: all 0.4s;
  height: 41px;
  text-align: right;
`;

export const LinkInverseMenu = styled.a`
  color: #fff;
  text-decoration: none;

  &:visited {
    color: #fff;
  }

  &:hover,
  &:active {
    color: #d3d3d3;
  }
`;

interface ActiveMakerProps {
  offset?: number;
}
export const ActiveMaker = styledTS<ActiveMakerProps>(styled.i)`
  transition: transform 0.4s;
  width: 5px;
  background-image: linear-gradient(90deg, #ff5e5e, #f54985);
  background-size: 100%;
  height: 30px;
  margin-left: 7px;
  transform: translateY(${(props) => props.offset}px);
`;
