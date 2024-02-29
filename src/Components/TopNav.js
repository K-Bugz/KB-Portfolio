import React from "react";
import styled from 'styled-components';

function TopNav() {
  return (
    // Update the container CSS
    <TopNavContainer>
      {/* Update the nav link style */}
      <NavItems>
        <NavItem>
          <MenuLink href="/">Home</MenuLink>
        </NavItem>
        <NavItem>
          <MenuLink href="/topics">What I am working on</MenuLink>
        </NavItem>
      </NavItems>
    </TopNavContainer>
  )
}

// These will be updated
const TopNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0px 5px 0px 5px;
  font-size: 24px;
  font-family: Copperplate,Copperplate Gothic Light,fantasy; 
  background-color: #3485ebcf;`

const NavItems = styled.ul`
margin: 1px;
display:flex;
list-style-type: none;
text-decoration: none;
flex-direction: row;`

const NavItem = styled.li`
  font-size: 27px;
  margin: 5px 30px 5px 10px;
  text-decoration: none;
  color: white;`

const MenuLink = styled.a`
  color: white;  
  text-decoration: none;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;`

export default TopNav;