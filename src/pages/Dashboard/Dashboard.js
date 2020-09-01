import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Moviesgrid from "../../components/MoviesGrid/MoviesGrid";
import Movieslist from "../../components/MoviesList/MoviesList";
import { getComics } from "../../utils/apiCalls";
import "./Dashboard.scss";

const Dashboard = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await getComics();
      console.log(response);
      setComics((oldArr) => [...oldArr, response]);
      if (response.next) {
        return await fetchComics(response.next);
      }
    };
    fetchComics();
  }, []);

  return (
    <Container fluid className="pl-5 pr-5">
      <Row>
        <Col>
          <Header />
          <NavBar />
          <Moviesgrid allComics={comics} />
          <Movieslist allComics={comics} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
