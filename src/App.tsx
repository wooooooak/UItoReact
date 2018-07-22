import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './router/Menu';
import GooeyEffect from './components/GooeyEffect';

class App extends React.Component {
  public render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Menu backgroundColor="green" />
          <Route path="/gooeyEffect" component={GooeyEffect} />
        </React.Fragment>
        {/* <HideMenuOnScroll color="red">chi</HideMenuOnScroll> */}
      </BrowserRouter>
    );
  }
}

export default App;
