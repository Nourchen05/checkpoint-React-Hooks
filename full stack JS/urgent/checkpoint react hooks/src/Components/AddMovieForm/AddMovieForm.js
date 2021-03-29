import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
import { Modal, Button } from "react-bootstrap";

export default function AddMovieForm({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setRate(0);
    return setShow(false);
  };
  const handleShow = () => setShow(true);

  const initMovie = { title: "", poster: "", description: "", rate: 0 };

  const [movie, setMovie] = useState(initMovie);

  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(null); //State pour le <SatrRating>

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title && movie.poster && movie.description && movie.rate) {
      handleChange(e, addMovie(movie));
      handleClose();
    }
    setRate(0);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ position: "absolute", right: 5, top: 15 }}
      >
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Title</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="e.g Chernobyl"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Poster</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="e.g https://images-na.ssl-images-amazon.com/images/I/71LKF6d63FL._AC_SY741_.jpg"
                name="poster"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput3">Discription</label>

              <textarea
                type="text"
                id="formGroupExampleInput3"
                className="form-control"
                name="description"
                onChange={handleChange}
              />
            </div>

            <StarRating
              onChange={handleChange}
              rating={rate}
              starIndex={setRate}
              hover={hover}
              setHover={setHover}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
