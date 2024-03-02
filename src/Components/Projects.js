import React from 'react';
import styled from 'styled-components';

function Projects(props) {
    console.log(props);
    const isEven = props.spot % 2 === 1;
    console.log(isEven);
  return (

    <ProjectContainer>
        {isEven ? (
        <>
          <ProjectDes>{props.des}</ProjectDes>
          <NameImgContainer>
            <ProjectName>{props.name}</ProjectName>
            <ProjectImg src={props.img} height='300px' width='520px' alt={props.name}></ProjectImg>
          </NameImgContainer>
        </>
      ) : (
        <>
          <NameImgContainer>
            <ProjectName>{props.name}</ProjectName>
            <ProjectImg src={props.img} height='300px' width='520px' alt={props.name}></ProjectImg>
          </NameImgContainer>
          <ProjectDes>{props.des}</ProjectDes>
        </>
      )}
    </ProjectContainer>
  );}

// update these styles below
// background: linear-gradient(to right, #100000, #100024);
const ProjectContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
background-color: #100024;
padding: 17px;
`

const NameImgContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
background-color: #f0f0f0;
border-radius: 20px;
`

const ProjectName = styled.h2`
font-size: 2.5em;
margin: -11px;
color: #100024;`

const ProjectImg = styled.img`
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
margin: 6px 0px 0px 0px;`

const ProjectDes = styled.h2`
font-size: 1.70em;
width: fill-rule;
padding:5px;
color: white;
margin: 0px 14px`

export default Projects;
