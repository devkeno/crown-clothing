import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
    <Header />
 <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/shop">
            <ShopPage/>
          </Route>
          <Route path="*">
          <Homepage />
          </Route>
       </Switch>
    </div>
  );
}

export default App;
