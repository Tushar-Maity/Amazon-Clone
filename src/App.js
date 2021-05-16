import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    {/* I would definitely code tomorrow for this project */}
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout!!</h1>
        </Route>
        <Route path="/login">
           <h1>Login!!</h1>
        </Route>
        <Route path="/">
           <Header />
           <h1>Homepage!!</h1>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
