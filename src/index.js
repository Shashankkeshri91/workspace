import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

let style = {
  color: "green",
  fontSize: "40px",
  margin: "2px",
  padding: "2px"
};
style.fontSize = "50px"; // we can change the following css properties by the use of jsx
style.color = "darkblue"; //
ReactDom.render(
  <div>
    <h1 style={style}>About</h1>
    <p style={{ color: "red" }}>
      As a dedicated individual, I am currently pursuing a Master's degree in
      Computer Science, fueled by my passion for technology and desire to expand
      my knowledge in the field. Alongside my studies, I am also actively
      engaged in an online bootcamp specializing in software engineering,
      further enhancing my practical skills. My technical expertise spans across
      Java, HTML, CSS, JavaScript, Node.js, Bootstrap, and React.js, which I
      have acquired through a combination of coursework and hands-on projects.
      These experiences have sharpened my problem-solving abilities and nurtured
      my aptitude for collaborating effectively within a team. Beyond my
      academic pursuits, I find joy in playing cricket and stargazing, both of
      which provide me with a well-rounded perspective and an outlet for
      creativity. These interests contribute to my ability to approach
      challenges with innovative solutions. With a genuine enthusiasm for
      technology and a steadfast commitment to continuous learning, I am
      confident that my skills and dedication make me a valuable addition to any
      IT team. I am eager to leverage my knowledge and contribute to meaningful
      projects, while also embracing new opportunities for growth and
      professional development.
    </p>
  </div>,
  document.getElementById("root")
);
