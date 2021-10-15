import "./responsive.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/contents/Menu";

import Operation from "./components/contents/Operation";
import About from "./components/contents/About";
import Prerequisites from "./components/contents/Prerequisites";
import Commissioning from "./components/contents/Commissioning";
import Installation from "./components/contents/Installation";
import Service from "./components/contents/Service";
import "./components/contents/menu.css";
import { subRoutes, baseRoutes } from "./common/constants";
import CommingSoon from "./components/CommingSoon";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={baseRoutes.PPRKF.base}>
            <Home />
          </Route>
          <Route exact path={subRoutes.PPRKF.menu}>
            <Menu />
          </Route>
          <Route exact path={subRoutes.PPRKF.operation}>
            <Operation />
          </Route>
          <Route exact path={subRoutes.PPRKF.about}>
            <About />
          </Route>
          <Route exact path={subRoutes.PPRKF.prerequisites}>
            <Prerequisites />
          </Route>
          <Route exact path={subRoutes.PPRKF.commissioning}>
            <Commissioning />
          </Route>
          <Route exact path={subRoutes.PPRKF.installation}>
            <Installation />
          </Route>
          <Route exact path={subRoutes.PPRKF.service}>
            <Service />
          </Route>
          <Route exact path={baseRoutes.CSRCSI.base}>
            <CommingSoon />
          </Route>
          <Route>
            <h3>Page not found</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
