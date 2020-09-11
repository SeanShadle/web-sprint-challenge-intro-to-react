import React from 'react'
import styled from 'styled-components'

export default function CharacterCard(props){
    return (
        <CharacterDiv>
            <Name>{props.name}</Name>
            <Gender>Gender: {props.gender}</Gender>
            <Height>Height: {props.height}</Height>
            <Mass>Mass: {props.mass}</Mass>
            <BirthYear>Birth Year: {props.birthYear}</BirthYear>
            <EyeColor>Eye Color: {props.eyeColor}</EyeColor>
            <HairColor>Hair Color: {props.hairColor}</HairColor>
            <SkinColor>Skin Color: {props.skinColor}</SkinColor>
        </CharacterDiv>

    )
}

const CharacterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    background: rgba(0,0,0, 0.5);
    width: 15vw;
    margin-left: 42.5vw;
    `
const Name = styled.h2`
    color: #FFE81F;
`
const Height = styled.p``
const Gender = styled.p``
const Mass = styled.p``
const BirthYear = styled.p``
const EyeColor = styled.p``
const HairColor = styled.p``
const SkinColor = styled.p`
    border-bottom: 2px dashed white;
    padding-bottom: 2rem;
`