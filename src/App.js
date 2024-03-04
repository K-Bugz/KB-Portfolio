//dependencies
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

//components & pa imports
import TopNav from './Components/TopNav.js';
import HomePage from './Pages/HomePage.js';
import CurrentTopicsPage from './Pages/CurrentTopicsPage.js';

//TopNav is rendered on every page and then we go into the Routes. 
class App extends Component {
  render() {
    return (
      <AppContainer>
        <TopNav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/topics' element={<CurrentTopicsPage/>} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    );
  }
}
const AppContainer = styled.div`
  background-color: #e9e4e4;
  marigin: 10px;
`
export default App;