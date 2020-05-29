import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions"

import Navbar from './components/navbar.js';
import Landing from './components/landingpage.js';
import Register from './components/auth/register.js';
import Login from './components/auth/login.js';

import {Provider} from "react-redux";
import store from './store.js';
import PrivateRoute from "./components/private-route/privateRouter";
import Dashboard from "./components/dashboard/dashboard.js"
import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
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
            <Navbar />
            <Route exact path="/" component={Landing} />
            

            <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            
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
