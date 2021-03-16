import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import Footer from './pages/Footer/Footer';
import Portfolio from './pages/PortfolioPage/Portfolio';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
