import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";

import Menu from "./router/Menu";
import About from "./components/About";
import GooeyEffect from "./components/GooeyEffect";
import TextFadeLoader from "./components/TextFadeLoader";
import SlidingLandingPage from "./components/SlidingLadingPage";
import MenuWithIndicator from "./components/MenuWithIndicator";
import TimeTime from "./components/TimeTime";

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
          <Route exact={true} path="/" component={About} />
          <Route path="/gooeyEffect" component={GooeyEffect} />
          <Route path="/textFadeLoader" component={TextFadeLoader} />
          <Route path="/slidingLandingPage" component={SlidingLandingPage} />
          <Route path="/menuWithIndicator" component={MenuWithIndicator} />
          <Route path="/timeTime" component={TimeTime} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
