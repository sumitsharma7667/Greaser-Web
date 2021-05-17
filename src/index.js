import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import CreateBrands from './Brands';
import Vehicle from './Brands/Vehicle';
import CreateService from './Services';
import Home from './Home';
import Login from './Login';
import SericeType from './Services/ServiceType';
import Services from './Service-packages';
import ServicesDetail from './Service-detail';
import Cart from './Cart';
import ContactUs from './ContactUs';
import Register from './Register';

const AppRoute = ({component:Component,layout:Layout, ...rest})=>(
  <Route {...rest} render ={props=>(
    <Layout><Component {...props}> </Component></Layout>
  )}></Route>
  )

ReactDOM.render(
    <BrowserRouter >
      <Switch>
      <AppRoute path ="/brand" layout={App} component={CreateBrands} />
      <AppRoute path ="/service" layout={App} component={CreateService} />
      <AppRoute path ="/service-type" layout={App} component={SericeType} />
      <AppRoute path ="/vehicle" layout={App} component={Vehicle} />
      <AppRoute path ="/dashboard" layout={App} component={Dashboard} />

      <Route path="/Cart"> 
          <Cart />
      </Route>
      <Route path="/ContactUs"> 
          <ContactUs />
        </Route>
      
      <Route path="/Services-detail"> 
          <ServicesDetail />
        </Route>
      <Route path="/Login"> 
          <Login />
      </Route>
      <Route path="/Register"> 
          <Register />
        </Route>
      <Route path="/services-packages"> 
          <Services />
        </Route>
      <Route path="/"> 
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
