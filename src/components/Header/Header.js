import React from "react";
import { Col, Row, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = (props) => {
  return (
    <Row className="header mt-4">
      <Col className="text-center">
        <h2>ComicBook</h2>
      </Col>
    </Row>
  );
};

export default Header;
