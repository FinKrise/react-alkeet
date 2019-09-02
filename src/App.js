import React, { useState } from 'react';
import logo from './photo.jpg';
import './App.css';
import Course from './components/Course';
import Teht1 from './components/Teht1';
import Teht2 from './components/Teht2';
import Skills from './components/Skills';
import ToggleButton from './components/ToggleButton';

const coursePart = "React alkeet";
const courseDate = ["9.8.2019","12.8.2019"];
const courseContents1 = ["Create_react_app", " gitbash", " JSX", " DOM"];
const courseContents2 = ["props", " array_funktiot"];
const courseContents= [courseContents1, courseContents2]

const yhtTiedot = ["Kristian Törmä", "kristian.torma@edu.tampere.fi"];

const kurssi1 = {id:0, course: "Javascript", teacher: "Tiina Partanen",class: "B2074",};
const kurssi2 = {id:1, course: "Java", teacher: "Eerikki Maula", class: "B2069"};
const kurssi3 = {id:2, course: "Unity", teacher: "Eerikki Maula", class: "B2074"};
const kurssit = [kurssi1, kurssi2, kurssi3]

const initialSkills = ["ebin"];



const App = () =>{
  const [show, setshow] = useState([true, true,true]);
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  const handleClick = numberOfButtons => {
    let tempShow = [...show];
    tempShow[numberOfButtons] = !tempShow[numberOfButtons];
    setshow(tempShow);
  }

  const handleChange = event => {
    setNewSkill(event.target.value);
    console.log(newSkill);
  }

const handleSubmit = event => {
  event.preventDefault();
  let tempSkills = skills.concat(newSkill)
  setSkills(tempSkills);
  setNewSkill("");
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h1>
          Kiitos ja näkemiin!
        </h1>
        <Course show={show[0]} partName={coursePart} partDate={courseDate} partContents={courseContents}/>
        <ToggleButton show={show[0]} clickHandler={handleClick} buttonNumber={0} />
        <Teht1 show={show[1]} partYht={yhtTiedot}/>
        <ToggleButton show={show[1]} clickHandler={handleClick} buttonNumber={1} />
        <Teht2 show={show[2]} course={kurssit}/>
        <ToggleButton show={show[2]} clickHandler={handleClick} buttonNumber={2} />
        <Skills newSkill={newSkill} 
                skills={skills} 
                changeHandler={e => handleChange(e)}
                submitHandler={e => handleSubmit(e)}
                />
        <a
          className="App-link"
          href="https://www.youtube.com/user/niilo22"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe to Niilo22
        </a>
      </header>
    </div>
  );
}

export default App;
