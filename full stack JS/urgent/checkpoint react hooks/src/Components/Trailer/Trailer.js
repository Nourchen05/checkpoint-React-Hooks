import React, { useEffect, useState } from "react";
import ListeMovies from "../MovieApp/ListeMovies";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Trailer.css";

const Trailer = ({ match }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(ListeMovies.find((movie) => movie.id === +match.params.id));
  }, [match]);

  return (
    <div className="cardContainer">
      <Card className="trailerMovie">
        <Card.Header as="h5" className="CardHeader">
          {movie.title}
          <Link to="/">
            <RiArrowGoBackLine className="backIcon" />
          </Link>
        </Card.Header>
        <Card.Body className="CardBody">
          <iframe
            title={movie.id}
            width="560"
            height="315"
            src={movie.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Card.Text className="CardText">{movie.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Trailer;
