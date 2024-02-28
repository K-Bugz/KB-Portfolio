//dependencies
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

//components & pa imports
import TopNav from './Components/TopNav.js';
import Home from './Pages/HomePage.js';
import Projects from './Pages/Projects.js';
import CurrentTopics from './Pages/CurrentTopics.js';

//TopNav is rendered on every page and then we go into the Routes. 
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <TopNav/>
          <Routes>
              <Route path='/' element={Home} />
              <Route path='/projects' element={Projects} />
              <Route path='/topics' element={CurrentTopics} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;