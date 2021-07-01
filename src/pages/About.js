import React from 'react';
import '../pages/About.css';

function About() {
    const aboutMe = <h2>About Me:</h2> 
    const aboutIntro = <p>My name is Joshua Burger, and I built this project as the capstone project
        for my web development program at the Flatiron School. I am skilled in Ruby, Ruby On Rails, SQL, Javascript,
        React, Redux, and HTML/CSS. This is the project I built as my last one for my Software Engineering program </p>
    
    return(
        <div>
          {aboutMe}
          {aboutIntro}
        </div>
    )
}

export default About