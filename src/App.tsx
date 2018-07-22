import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from './router/Menu';
import GooeyEffect from './components/GooeyEffect';

class App extends React.Component {
  public render () {
    return (
      <BrowserRouter>
        <div>
          <Menu backgroundColor="green" />
          <GooeyEffect />
        </div>
        {/* <Route exact={true} to="/hideMenuOnScroll" component={HideMenuOnScroll} /> */}
        {/* <HideMenuOnScroll color="red">chi</HideMenuOnScroll> */}
      </BrowserRouter>
    );
  }
}

export default App;
