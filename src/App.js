import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "../src/components/Footer/Footer";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ServicePage from "./components/ServicePage/ServicePage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { Affix } from "antd";
import Contact from "./containers/Contact/Contact";
import PartnersClients from "./components/Navbar/PartnersClients/PartnersClients";
import About from "./components/Navbar/About/About";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>

      <TransitionGroup className="main">
        <CSSTransition timeout={500} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/services/:slug?" component={ServicePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/partners-clients" component={PartnersClients} />
            <Route exact path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
