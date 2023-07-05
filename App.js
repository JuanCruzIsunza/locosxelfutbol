import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Tienda de Camisetas de Fútbol</h1>
        </header>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/product/:id" component={ProductDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
