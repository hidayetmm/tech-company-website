import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "../src/components/Footer/Footer";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ServicePage from "./components/ServicePage/ServicePage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />

      <TransitionGroup className="main">
        <CSSTransition timeout={400} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/services/:slug?" component={ServicePage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
