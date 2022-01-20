import React,{ } from 'react';
import './App.css';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Pagamento from './pages/Pagamento'
import Login from './pages/Login'
import Failed from './pages/Failed'
import Error from './pages/Error';
import Obrigado from './pages/Obrigado';
import ObrigadoPix from './pages/ObrigadoPix';
import User from './pages/User';
import {DataContext} from './DataContext'
import {ProductContextContainer} from './ProductContext'
import {MoreProducts} from './MoreContext.js'
import {ToastContainer} from 'react-toastify';
import Email from './pages/Email';
function App() {

  return (
    <DataContext>
    <Router>
      <ToastContainer />
    <ProductContextContainer>
    <MoreProducts>
    <div className="App bg-slate-100">


    <Switch>
      <Route path="/pagamento/:hash">
        <Pagamento/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/email?e=email">
        <Email/>
      </Route>

      <Route path="/user">
        <User/>
      </Route>

      <Route path="/obrigado">
        <Obrigado/>
      </Route>

      <Route path="/pix/:hashKey">
        <ObrigadoPix/>
      </Route>
      
      <Route path="/failed">
        <Failed/>
      </Route>
      
      <Route path="*">
        <Error/>
      </Route>
      
   
    </Switch> 
    </div>
    </MoreProducts>
    </ProductContextContainer>
    </Router>
    </DataContext>
    
  );
}

export default App;
