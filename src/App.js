import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Weather from './Weather';
import ToDoList from './ToDoList';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/todolist" component={ToDoList} />
        <Redirect to="/" />
    </Switch>
    <Footer />
    </>
    )
}

export default App;
