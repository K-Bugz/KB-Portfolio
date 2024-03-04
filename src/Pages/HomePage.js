import React from 'react';
import styled from 'styled-components';
import Skills from '../Components/Skill';
import Projects from '../Components/Projects';
import { skillsArray, projectsArray } from '../Data';

export default function HomePage() {

    return (
    <HomePageContainer>
        <MeSection>
            <NameSection>Kevin Bugusky</NameSection>
            <ImageSection>
                <img src={process.env.PUBLIC_URL + 'kevbug.jpg'} alt="3 humans in the forest climbing trees."></img>
            </ImageSection>
            <SkillsSection>
                {skillsArray.map((skillsArray, index) => (<Skills key={index} {...skillsArray} />))}
            </SkillsSection>
        </MeSection> 
        <ProjectsSection>
            {projectsArray.map((projectsArray, index) => (<Projects key={index} {...projectsArray} />))}
        </ProjectsSection>
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
display: flex
flex-direction: column;
height: 100vh;`;

const MeSection = styled.div`
height: 264px;
width: 100%;
padding: 6px;
background-color: #f0f0f0;
display: flex;`;


// Change color gradient????
const NameSection = styled.div`
width: 34%;
background-color: #f0f0f0;
padding: 1px;
font-family: "Exo", sans-serif;
font-size: 3.4vw;
font-weight: 900;
margin: auto;
text-transform: uppercase;
background: linear-gradient(219deg, 
var(--color-1) 19%, 
transparent 19%,transparent 20%, 
var(--color-2) 20%, var(--color-2)  39%,
transparent 39%,transparent 40%, 
var(--color-3) 40%,var(--color-3) 59% ,
transparent 59%,transparent 60%, 
var(--color-4) 60%, var(--color-4) 79%,
transparent 79%, transparent 80%, 
var(--color-5) 80%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;`;

const ImageSection = styled.div`
width: 19%;
background-color: #000000;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
border-radius: 50%;`;

const SkillsSection = styled.div`
width: 47%;
background-color: #f0f0f0;
padding: 20px;
display: flex;
justify-content: space-around;
flex-direction:row;
flex-wrap: wrap;`;

const ProjectsSection = styled.div`
display: flex;
flex-direction: column;

`;