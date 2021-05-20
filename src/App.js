import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ServicePage from "./components/ServicePage/ServicePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
