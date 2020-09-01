import React from "react";
import { Row, Col } from "react-bootstrap";

const Movieslist = (props) => {
  return (
    <Row>
      <Col md={12}>
        <Row className="p-5">
          <Col md={4} className="text-center">
            foto
          </Col>
          <Col md={8} className="text-center">
            descripton
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Movieslist;
