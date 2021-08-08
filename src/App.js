import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='content'>
          {/* instead of using the "exact keyword within the Route attributes we can use a Switch" */}
          <Switch>
            {/* to define parameters we have to prefix the param with semicolon */}
            <Route path="/products/:id" component={ProductDetails}/>
            {/* in the switch if one route matches it disables the rest */}
            {/* order from the most specific to the most general */}
            {/* the props are default props (history, location, match...) that we can pass if we want them */}
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
            {/* if you want to pass more props to the component you need to use the render attribute instead and pass */}
            {/* the props inside an arrow function */}
            {/* question marks at the end of the parameter means it's optional. JSX regex expression syntax */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
          
        </div>
      </div>
    );
  }
}

export default App;
