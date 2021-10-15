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

function App() {
  return (
    <Router basename="/PPRKF">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route path="/operation">
            <Operation />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/prerequisites">
            <Prerequisites />
          </Route>
          <Route path="/commissioning">
            <Commissioning />
          </Route>
          <Route path="/installation">
            <Installation />
          </Route>
          <Route exact path="/service">
            <Service />
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
