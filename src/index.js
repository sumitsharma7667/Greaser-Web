import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './history';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./Dashboard";
import CreateBrands from "./Brands";
import Vehicle from "./Brands/Vehicle";
import CreateService from "./Services";
import Home from "./Home";
import Login from "./Login";
import SericeType from "./Services/ServiceType";
import Services from "./Service-packages";
import ServicesDetail from "./Service-detail";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Register from "./Register";
import Checkout from "./Checkout";
import SingleService from "./SingleService";
import AllMechanics from "./AllMechanics";
import AllMechanicsWithService from "./AllMechanicsWithService";
import AllUsers from "./AllUsers";



import Terms from "./Terms";
import PrivacyPolicy from "./PrivacyPolicy";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}> </Component>
      </Layout>
    )}
  ></Route>
);

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <AppRoute path="/brand" layout={App} component={CreateBrands} />
      <AppRoute path="/service" layout={App} component={CreateService} />
      <AppRoute path="/service-type" layout={App} component={SericeType} />
      <AppRoute path="/AllMechanics" layout={App} component={AllMechanics} />
      <AppRoute path="/AllMechanicsWithService" layout={App} component={AllMechanicsWithService} />
      <AppRoute path="/AllUsers" layout={App} component={AllUsers} />
      
      <AppRoute path="/vehicle" layout={App} component={Vehicle} />
      <AppRoute path="/dashboard" layout={App} component={Dashboard} />

      <Route path="/PrivacyPolicy">
        <PrivacyPolicy />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/Terms">
        <Terms />
      </Route>
      <Route path="/SingleService">
        <SingleService />
      </Route>
      <Route path="/Checkout">
        <Checkout />
      </Route>
      <Route path="/ContactUs">
        <ContactUs />
      </Route>

      <Route
        path="/Services-detail"
        component={ServicesDetail}
      />

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
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
