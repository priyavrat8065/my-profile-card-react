import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function CardDesc() {
  return (
    <main className="card-desc">
      <h1>Priyavrat Chaudhary</h1>
      <p>
        I am a full-stack web developer from india. When not coding or learning
        a course, I like to play board games, to cook(and eat), or to enjoy to
        take a walk in the nature.
      </p>
      <Skills />
    </main>
  );
}
function Skill(props) {
  return (
    <div className={props.className}>
      {props.skillset} {props.emoji}
    </div>
  );
}
function Skills() {
  return (
    <div className="skills">
      <Skill skillset="HTML+CSS" emoji="💪🏽" className="skill--1" />
      <Skill skillset="Javascript" emoji="💪🏽" className="skill--2" />
      <Skill skillset="Web Design" emoji="👶🏼" className="skill--3" />
      <Skill skillset="Git & GitHub" emoji="💪🏽" className="skill--4" />
      <Skill skillset="React" emoji="👶🏼" className="skill--5" />
      <Skill skillset="Python" emoji="💪🏽" className="skill--6" />
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <img src="priyavrat.png" alt="pizza" width="466px" />

      <CardDesc />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
