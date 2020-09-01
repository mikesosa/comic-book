import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingleComic } from "../../utils/apiCalls";
import { Row, Col, Image, Spinner } from "react-bootstrap";
import "./ComicDetail.scss";

const ComicDetail = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let location = useLocation();
  let comicId = location.pathname.split("/")[2];

  // Get comic details on load
  useEffect(() => {
    const fetchComics = async () => {
      const response = await getSingleComic(comicId);
      setDetails(response);
      setLoading(false);
      if (response.next) {
        return await fetchComics(response.next);
      }
    };
    fetchComics();
  }, [comicId]);

  const setDetail = (items, name) => (
    <Col md={12}>
      <h3>{name}</h3>
      <hr />
      <ul className="list-unstyled row">
        {items.map((char, idx) => {
          return (
            <li className="list-item col-6 my-2" key={idx}>
              {char.name}
            </li>
          );
        })}
      </ul>
    </Col>
  );

  return (
    <Row className="comic-detail">
      {loading ? (
        <Spinner animation="border" role="status" className="m-auto">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <React.Fragment>
          <Col md={8}>
            <Row>{setDetail(details.character_credits, "Characters")}</Row>
            <Row>{setDetail(details.team_credits, "Team")}</Row>
            <Row>{setDetail(details.location_credits, "Locations")}</Row>
            <Row>{setDetail(details.concept_credits, "Concepts")}</Row>
          </Col>
          <Col md={4}>
            <Image src={details.image.medium_url} rounded />
          </Col>
        </React.Fragment>
      )}
    </Row>
  );
};

export default ComicDetail;
