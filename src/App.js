import React from 'react';
import logo from './photo.jpg';
import './App.css';
import Course from './components/Course';
import Teht1 from './components/Teht1';
import Teht2 from './components/Teht2';

const coursePart = "React alkeet";
const courseDate = ["9.8.2019","12.8.2019"];
const courseContents1 = ["Create_react_app", " gitbash", " JSX", " DOM"];
const courseContents2 = ["props", " array_funktiot"];
const courseContents= [courseContents1, courseContents2]

const yhtTiedot = ["Kristian Törmä", "kristian.torma@edu.tampere.fi"];

const kurssi1 = {course: "Javascript", teacher: "Tiina Partanen",class: "B2074",};
const kurssi2 = {course: "Java", teacher: "Eerikki Maula", class: "B2069"};
const kurssit = [kurssi1, kurssi2]

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h1>
          Kiitos ja näkemiin!
        </h1>
        <Course partName={coursePart} partDate={courseDate} partContents={courseContents}/>
        <Teht1 partYht={yhtTiedot}/>
        <Teht2 kurssitaulu={kurssit}/>
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
