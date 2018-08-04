import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import styledTS from 'styled-components-ts';
import { Menu } from 'styled-icons/material/Menu';

interface State {
  src: string[];
}

const imageSlide = keyframes`
  0% {
    right: 0px;
  }
  20% {
    right: 0;
  }
  40% {
    right: 700px;
  }
  60% {
    right: 700px;
  }
  80% {
    right: 1400px;
  }
  100% {
    right: 1400px;
  }
`;

const bgChange = keyframes`
  0% {
    background-color:#FF80AB;
  }
  50% {
    background-color: #93213e;//#761830;//#9575CD;
  }
  100% {
    background-color: #1565C0;
  }
`;

const numberChange = keyframes`
    0% {
    right: 0px;
  }
  20% {
    right: 0;
  }
  40% {
    right: 18px;
  }
  60% {
    right: 18px;
  }
  80% {
    right: 36px;
  }
  100% {
    right: 36px;
  }
`;

const Wrapper = styled.div`
  margin: 180px auto;
  width: 700px;
  height: 500px;
  background-color: #ff80ab;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${bgChange} 6s ease-in-out alternate infinite;
`;

const Header = styled.header`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 30px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LineParent = styled.span`
  margin: 0 2px;
  width: 4px;
  background-color: white;
`;

const Line = LineParent.extend`height: 20px;`;

const LineMiddle = LineParent.extend`height: 12px;`;

const Heading = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const HambergerMenu = Menu.extend`margin-right: 15px;`;

const Main = styled.main`
  width: 2100px;
  height: calc(500px - 90px);
  display: flex;
`;

const HomeContent = styled.div`
  position: absolute;
  z-index: 5;
  margin-left: 25px;
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 7px;
  h2:nth-child(1) {
    margin-bottom: 0;
  }
  h2:nth-child(2) {
    margin-top: 0;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 1px;
  }
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 415;
  display: flex;
  justify-content: center;
  position: relative;
  animation: ${imageSlide} 6s ease-in alternate infinite;
`;

interface IImg {
  src: string;
}

const Img = styledTS<IImg>(styled.img).attrs({
  src: `${(props: IImg) => props.src}`
})`
  width: 330px;
  height: 415px;
  position: absolute;
`;

const Footer = styled.footer`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const FooterHeading = styled.div`
  margin-left: 25px;
  letter-spacing: 1.4px;
  font-weight: bold;
`;

const PageNumber = styled.div`
  width: 16px;
  height: 20;
  margin-right: 25px;
  overflow: hidden;
  display: flex;
`;

const Num = styled.div`
  position: relative;
  animation: ${numberChange} 6s ease-in alternate infinite;
`;

class SlidingLandingPage extends React.Component<{}, State> {
  state = {
    src: [
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=5316f5e28c03cf83113182db0ee6d0c1',
      'https://images.unsplash.com/photo-1528488973032-1d4818f491a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172a824f0c663cc4e30f4acd0a2d350b&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02261b49dc587eaecb3dfae7ccfbbcaa&auto=format&fit=crop&w=500&q=60'
    ]
  };

  mapStateToImage = () => {
    let result;
    result = this.state.src.map((el, index) => {
      return (
        <ImageContainer key={index}>
          <Img src={el} />
        </ImageContainer>
      );
    });
    return result;
  };

  render () {
    return (
      <Wrapper>
        <Header>
          <Logo>
            <Line />
            <LineMiddle />
            <Line />
          </Logo>
          <Heading>Fabstract</Heading>
          <HambergerMenu size={30} />
        </Header>
        <Main>
          <HomeContent>
            <h2>Nature's</h2>
            <h2>Candy</h2>
          </HomeContent>
          {this.mapStateToImage()}
        </Main>
        <Footer>
          <FooterHeading>Fruits galore!</FooterHeading>
          <PageNumber>
            <Num>01</Num>
            <Num>02</Num>
            <Num>03</Num>
          </PageNumber>
        </Footer>
      </Wrapper>
    );
  }
}

export default SlidingLandingPage;
