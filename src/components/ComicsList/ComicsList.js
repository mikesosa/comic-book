import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Image, Spinner } from "react-bootstrap";
import { dateFormatter } from "../../utils/helpFucntions";
import "./ComicsList.scss";

const ComicsList = ({ allComics }) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (allComics.length) {
      setComics(allComics);
    }
  }, [allComics]);

  useEffect(() => {
    if (comics.length) {
      setLoading(false);
    }
  }, [comics]);

  const handleClick = (data) => {
    let theUrl = data.api_detail_url.split("/");
    theUrl = theUrl[5];
    history.push(`detail/${theUrl}`);
  };

  return (
    <Row className="comics-list">
      <Col md={12} className="text-center">
        {loading ? (
          <Spinner animation="border" role="status" className="mt-5">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <React.Fragment>
            {comics.map((comic, idx) => {
              return (
                <Row className="comic-row" key={idx}>
                  <Col md={4} className="text-center">
                    <Image
                      src={comic.image.medium_url}
                      rounded
                      onClick={() => handleClick(comic)}
                    />
                  </Col>
                  <Col md={8} className="text-center">
                    <Card>
                      <Card.Body className="text-center">
                        <h5 onClick={() => handleClick(comic)}>{`${
                          comic.name == null ? "No name" : comic.name
                        } #${comic.issue_number}`}</h5>
                        <p className="text-muted">
                          {dateFormatter(comic.date_added)}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </React.Fragment>
        )}
      </Col>
    </Row>
  );
};

export default ComicsList;
