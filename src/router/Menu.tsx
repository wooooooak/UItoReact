import * as React from 'react';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

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

interface NavBarElementProps {
  href: string;
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

const NavBarElement = styledComponentsTS<NavBarElementProps>(styledComponents.a)`
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
      console.log('exex');
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
          <NavBarElement href="#">Home</NavBarElement>
          <NavBarElement href="#">Services</NavBarElement>
          <NavBarElement href="#">Contact</NavBarElement>
        </NavBar>
        <div>
          <h1>Scroll Down</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ratione,
            repellat recusandae numquam officiis tempora dolore laboriosam quod vero minus
          </p>
        </div>
        {this.state.prevScrollpos}
      </div>
    );
  }
}

export default Menu;
