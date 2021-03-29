import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRating from "../StarRating/StarRating";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: 5,
        position: "relative",
      }}
    >
      <Card.Img variant="top" src={movie.poster} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <StarRating rating={movie.rate} />
        <Card.Text style={{ textAlign: "justify" }}>
          {movie.description}
        </Card.Text>
        <Link to={`/trailer/${movie.id}`}>
          <Button
            variant="primary"
            style={{ position: "absolute", right: 10, bottom: 10 }}
          >
            Trailer
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
