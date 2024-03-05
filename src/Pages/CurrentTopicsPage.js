import React from 'react';
import styled from 'styled-components';
import Projects from '../Components/Projects';
import { projectsArray, currentTopicsArray } from '../Data';

export default function CurrentTopicsPage() {
        
    return (
    <ProjectsContainer> 
        <TitleContainer><h1>What I am currently working on!!</h1></TitleContainer>
        <CurrentTopicsContainer>
            <CurrentTopics>
            {currentTopicsArray.map((currentTopicsArray, index) => (<Projects key={index} {...currentTopicsArray} />))}
            </CurrentTopics>
        </CurrentTopicsContainer>
        <ProjectsSection>
            {projectsArray.map((projectsArray, index) => (<Projects key={index} {...projectsArray} />))}
        </ProjectsSection>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
background: radial-gradient(-180px 0px,circle ,#0053ad 100px,#001b85 350px,#000223);
background-color: #ffffff;`

const TitleContainer = styled.div`
    font: 29px arial;
	display:block;
    text-align: center;
    min-width: 20em;
    width: 50%;
    max-width: 90%;
    margin: auto;
    background-color: #ffffff;
    border: 2px solid white;
    border-radius: 10px;
    h1 { 
        font-size: 2.69vw;
        text-shadow: 0 0 3px #00ffce, 0 0 5px #c20eff;
        margin: 0px;
    }`;

const CurrentTopicsContainer = styled.div`
    font: 29px arial;
	display:block;
    text-align: center;
    background-color: #ffffff;
    h1 { 
        font-size: 2.69vw;
        text-shadow: 0 0 3px #00ffce, 0 0 5px #c20eff;
        margin: 0px;
    }`;

const CurrentTopics = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;
const ProjectsSection = styled.div`
display: flex;
flex-direction: column;
`;