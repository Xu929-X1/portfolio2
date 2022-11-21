import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Alvin Xu </span>
            <span className="purple">.</span>
            <br />I am a front end dev with around 5 yrs experience.
            <br />
            I enjoy working with JS, React, Vue and other frameworks, and learning backend stuff.
            </p>
  
  
          <ul>
            <li className="about-activity">
              <ImPointRight /> Build Visual Effects
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Out Fishing or Hiking on a Sunny Day
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
