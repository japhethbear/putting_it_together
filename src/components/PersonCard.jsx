import React, { useState } from 'react'

const PersonCard = (props) => {

const [ ageToday, setAgeToday ] = useState(props.age);
  
  const handleClick = () => {
    setAgeToday(ageToday + 1); 
  }
  
  return (
    <div>
        <h1>{ props.lastName }, { props.firstName }</h1>
        <p>Age: { ageToday }</p>
        <p>Hair Color: { props.hairColor }</p>
        <button onClick={ handleClick } >Click on {props.firstName}'s Birthday!</button>
    </div>
  );
}

export default PersonCard