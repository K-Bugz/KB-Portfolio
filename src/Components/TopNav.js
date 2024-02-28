import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function TopNav() {
  return (
    // Update the container CSS
    <TopNavContainer>
      {/* Update the nav link style */}
        <Nav>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/">Home</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/projects">Projects</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/topics">What I am working on</NavLink>
        </Nav>
    </TopNavContainer>
    )
}

// These will be updated
const TopNavContainer = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: calc(var(--20px) - 10px);
  border-radius: 50px;
  transition: all .2s linear;
  font-size: 24px;
  font-family: Copperplate,Copperplate Gothic Light,fantasy; 
`
const Nav = styled.nav`

`

export default TopNav;