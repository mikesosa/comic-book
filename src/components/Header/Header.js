import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Row className="header mt-4">
      <Col className="text-center">
        <a href="/">
          <h2>ComicBook</h2>
        </a>
      </Col>
    </Row>
  );
};

export default Header;
