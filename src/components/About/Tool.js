import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiStorybook,
  SiSwagger,
  SiDeno,
  SiWebassembly,
  SiRaspberrypi,
  SiArduino,
} from "react-icons/si";

function Tool() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDeno />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebassembly />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
    </Row>
  );
}

export default Tool;