import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions"


import Home from './components/homepage.js';
import Register from './components/auth/register.js';
import Login from './components/auth/login.js';

import { Provider } from "react-redux";
import store from './store.js';
import PrivateRoute from "./components/private-route/privateRouter";
import Dashboard from "./components/dashboard/dashboard.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapseNav from './components/nav.js';
//import Cart from './components/cart/cart.js';
import WomanPage from './components/womanPage.js'
import ManPage from './components/manPage.js'
import Details from './components/details.js'
import Cart from './components/cart/cart.js'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <CollapseNav />
            <Route exact path="/" component={Home} />
            <Route exact path="/women" component={WomanPage} />
            <Route exact path="/men" component={ManPage} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/cart" component={Cart} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
