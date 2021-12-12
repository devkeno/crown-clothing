import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'; 

const HatsPage= props =>{
  console.log(props);
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}




function App() {
  return (
    <div className="App">
 <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/shop/hats">
            <HatsPage />
          </Route>
          <Route path="*">
          <Homepage />
          </Route>
       </Switch>
    </div>
  );
}

export default App;
