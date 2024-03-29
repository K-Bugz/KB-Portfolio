import React from 'react';
import styled from 'styled-components';

function Skills(props) {
  return (
    <SkillsContainer onClick={props.link}>
        <SkillName>{props.name}</SkillName>
        <SkillImg src={props.img} height='50px' width='50px' alt = {props.name}></SkillImg>
    </SkillsContainer>
  );}

const SkillsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 110px;
`

const SkillName = styled.h2`
margin: 0px 9px;
font-size: 1.21em;`

const SkillImg = styled.img``

export default Skills;
