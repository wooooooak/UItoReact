import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Menu from './router/Menu';
import GooeyEffect from './components/GooeyEffect';
import TextFadeLoader from './components/TextFadeLoader';

injectGlobal`
  body {
    margin: 0;
    max-width: 100vw;
      *:focus {
        outline: none;
      }
  }
`;

class App extends React.Component {
  public render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Menu backgroundColor="green" />
          <Route path="/gooeyEffect" component={GooeyEffect} />
          <Route path="/textFadeLoader" component={TextFadeLoader} />
        </React.Fragment>
        {/* <HideMenuOnScroll color="red">chi</HideMenuOnScroll> */}
      </BrowserRouter>
    );
  }
}

export default App;
