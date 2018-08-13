import * as React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import styled from 'styled-components';

interface MenuBarProps {
  backgroundColor?: string;
}
interface StateProps {
  prevScrollpos: number;
  // currentScrollpos: number;
  top?: string;
}

interface NavBarProps {
  backgroundColor?: string;
  top?: string;
}

const NavBar = styledComponentsTS<NavBarProps>(styledComponents.div)`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  position: fixed;
  width: 100%;
  display: block;
  transition: top 0.8s;
  top: ${(props) => props.top};
`;

const NavBarElement = styled(Link)`
float: left;
  display: block;
  color: #fff;
  font-weight: 300;
  text-decoration: none;
  margin: 2em 3em;
  font-size: 16px;
`;

class Menu extends React.Component<MenuBarProps, StateProps> {
  state = {
    prevScrollpos: window.pageYOffset,
    top: '0'
  };

  componentDidMount (): any {
    window.onscroll = (): void => {
      const currentScrollpos: number = window.pageYOffset;
      if (this.state.prevScrollpos < currentScrollpos) {
        this.setState({
          prevScrollpos: currentScrollpos,
          top: '-100px'
        });
      } else {
        this.setState({
          prevScrollpos: currentScrollpos,
          top: '0'
        });
      }
    };
  }

  render () {
    return (
      <div>
        <NavBar top={this.state.top} backgroundColor={this.props.backgroundColor}>
          <NavBarElement to="/">Home</NavBarElement>
          <NavBarElement to="/gooeyEffect">GooeyEffect</NavBarElement>
          <NavBarElement to="/textFadeLoader">textFadeLoader</NavBarElement>
          <NavBarElement to="/slidingLandingPage">SlidingLandingPage</NavBarElement>
          <NavBarElement to="/menuWithIndicator">MenuWithIndicator</NavBarElement>
        </NavBar>
        <div />
        {this.state.prevScrollpos}
      </div>
    );
  }
}

export default Menu;
