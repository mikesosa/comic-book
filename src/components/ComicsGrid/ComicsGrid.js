import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, CardColumns, Spinner } from "react-bootstrap";
import "./ComicsGrid.scss";

const ComicsGrid = ({ allComics }) => {
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

  const dateFormatter = (data) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let date = new Date(data).toLocaleString("en-US", options);
    return date;
  };

  const handleClick = (data) => {
    let theUrl = data.api_detail_url.split("/");
    theUrl = theUrl[5];
    history.push(`detail/${theUrl}`);
  };

  return (
    <Row className="movies-grid">
      <Col className="text-center">
        {loading ? (
          <Spinner animation="border" role="status" className="mt-5">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <CardColumns>
            {comics.map((comic, idx) => {
              return (
                <Card key={idx} onClick={() => handleClick(comic)}>
                  <Card.Img variant="top" src={comic.image.small_url} />
                  <Card.Body className="text-center">
                    <h5>{`${comic.name == null ? "No name" : comic.name} #${
                      comic.issue_number
                    }`}</h5>
                    <p className="text-muted">
                      {dateFormatter(comic.date_added)}
                    </p>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        )}
      </Col>
    </Row>
  );
};

export default ComicsGrid;
