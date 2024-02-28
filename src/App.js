//dependencies
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

//components & pa imports
import TopNav from './Components/TopNav.js';
import Home from './Pages/HomePage.js';
import CurrentTopics from './Pages/CurrentTopics.js';

//TopNav is rendered on every page and then we go into the Routes. 
class App extends Component {
  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path='/' element={Home} />
            <Route path='/topics' element={CurrentTopics} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    );
  }
}
const AppContainer = styled.div`
  background-color: #e9e4e4;
`
export default App;