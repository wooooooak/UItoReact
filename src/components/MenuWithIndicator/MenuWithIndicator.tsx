import * as React from 'react';

import {
  Background,
  VerticalMenu,
  VerticalMenuItem,
  VerticalMenuWrapper,
  LinkInverseMenu,
  ActiveMaker
} from './style';

interface State {
  activeMakerOffset: number;
}

class MenuWithIndicator extends React.Component<{}, State> {
  state = {
    activeMakerOffset: 0
  };

  getItemOffset = (item: EventTarget & HTMLElement): number => {
    return item.offsetTop;
  };

  togleActive = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const offset: number = this.getItemOffset(e.currentTarget);
    this.setState({
      activeMakerOffset: offset
    });
  };

  render () {
    return (
      <Background>
        <VerticalMenuWrapper>
          <VerticalMenu>
            <VerticalMenuItem>
              <LinkInverseMenu href="" onClick={this.togleActive}>
                This is the Day
              </LinkInverseMenu>
            </VerticalMenuItem>
            <VerticalMenuItem>
              <LinkInverseMenu href="" onClick={this.togleActive}>
                Hello World
              </LinkInverseMenu>
            </VerticalMenuItem>
            <VerticalMenuItem>
              <LinkInverseMenu href="" onClick={this.togleActive}>
                Just Don't Forget
              </LinkInverseMenu>
            </VerticalMenuItem>
            <VerticalMenuItem>
              <LinkInverseMenu href="" onClick={this.togleActive}>
                Us vs. Them
              </LinkInverseMenu>
            </VerticalMenuItem>
            <VerticalMenuItem>
              <LinkInverseMenu href="" onClick={this.togleActive}>
                Flavor of the Month
              </LinkInverseMenu>
            </VerticalMenuItem>
            <VerticalMenuItem>
              <LinkInverseMenu href="" onClick={this.togleActive}>
                Things We're Loving
              </LinkInverseMenu>
            </VerticalMenuItem>
          </VerticalMenu>
          <ActiveMaker offset={this.state.activeMakerOffset} />
        </VerticalMenuWrapper>
      </Background>
    );
  }
}

export default MenuWithIndicator;
