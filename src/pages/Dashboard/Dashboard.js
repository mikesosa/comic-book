import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ComicsGrid from "../../components/ComicsGrid/ComicsGrid";
import ComicsList from "../../components/ComicsList/ComicsList";
import ComicDetail from "../../components/ComicDetail/ComicDetail";
import { getComics } from "../../utils/apiCalls";
import "./Dashboard.scss";

const Dashboard = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      let arr = [];
      const response = await getComics();
      response.forEach((element) => arr.push(element));
      setComics(arr);
      if (response.next) {
        return await fetchComics(response.next);
      }
    };
    fetchComics();
  }, []);

  return (
    <Container fluid className="dashboard">
      <Row>
        <Col>
          <Header />
          <HashRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <ComicsGrid allComics={comics} />
              </Route>
              <Route exact path="/list">
                <ComicsList allComics={comics} />
              </Route>
              <Route path="/detail">
                <ComicDetail />
              </Route>
            </Switch>
          </HashRouter>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
