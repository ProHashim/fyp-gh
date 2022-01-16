
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import FeaturedPage from './pages/featured';
import About from './pages/about';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/featured' component={FeaturedPage}></Route>
        <Route exact path='/about' component={About}></Route>
    </Routes>
  );
}

export default Main;