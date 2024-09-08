import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Home from './component/Dashboard/home/home.js';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getTotals } from './component/Dashboard/cart/cartslice';
function App() {
  store.dispatch(getTotals())

  return (
    <div style={{height:'100%'}}>
      
      <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <Route  exact path='/'><Home  /></Route>
        <Route path='/home'> <Home /></Route>
      </Switch>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
