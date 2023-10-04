import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Cart from "./Cart";
import Catalogo from "./Catalogo";
import DetalleProducto from "./DetalleProducto";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Catalogo} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/category/:id" component={Catalogo} />
        <Route exact path="/item/:id" component={DetalleProducto} />
      </Switch>
    </Router>
  );
};

export default App;