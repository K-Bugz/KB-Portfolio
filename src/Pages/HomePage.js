import React from 'react';
import styled from 'styled-components';
import Skills from '../Components/Skill';
import Projects from '../Components/Projects';

export default function HomePage() {
    var skillsArray = [ // Skill images are from www.svgrepo.com.  
        { name: 'Node', img: 'https://www.svgrepo.com/show/303205/html-5-logo.svg' },
        { name: 'React', img: 'https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg' },
        { name: 'HTML', img: 'https://www.svgrepo.com/show/508837/html5-01.svg' },
        { name: 'CSS', img: 'https://www.svgrepo.com/show/452185/css-3.svg' },
        { name: 'Python', img: 'https://www.svgrepo.com/show/452091/python.svg' },
        { name: 'Docker', img: 'https://www.svgrepo.com/show/452192/docker.svg' },
        { name: 'SQL', img: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
        { name: 'MongoDB', img: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
        { name: 'Scratch', img: 'https://www.svgrepo.com/show/306704/scratch.svg' },
        { name: 'Excel', img: 'https://www.svgrepo.com/show/424846/excel-file-type.svg' },]

    var projectsArray = [
        {
            name: 'AccuRadio',
            des:'A music streaming company. I created new and maintained existing components within React.JS framework. I also made the new player that was more accesible and responsive.',
            link: 'https://k-bugz.github.io/Code-Quiz/',
            img: process.env.PUBLIC_URL + 'AccuRadio.jpg',
            spot: 0
        },
        {
            name: 'Weather App',
            des:'This was one of my first time using an API and I had to use two. One for getting the city location in lat and long then use that to hit another API to get the weather. Lots of fun!',
            link: 'https://k-bugz.github.io/Weather-Dashboard/',
            img: process.env.PUBLIC_URL + 'DesktopWeatherDash.png',
            spot: 1
        },
        {
            name: 'Password Generator',
            des:'This project required me to learn RegEx and apply it to user inputs and user validation.',
            link: 'https://k-bugz.github.io/password-generator/',
            img: process.env.PUBLIC_URL + 'pwordGen.png',
            spot: 2
        },
        {
            name: 'Football Coding Quiz',
            des:'This was one of my first time using Jquery. I had a lot of fun thinking about how to get this to work properly. I chose to make each question an array of objects!',
            link: 'https://k-bugz.github.io/Code-Quiz/',
            img: process.env.PUBLIC_URL + 'BearsCodeQuiz.png',
            spot: 3
        },
    ]

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