import React from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
export default function StarRating({
  rating,
  starIndex,
  onChange,
  hover,
  setHover,
}) {
  return (
    <div id="stars">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label className="starLabel" key={i}>
            <input
              type="radio"
              name="rate"
              value={ratingValue}
              onClick={() => starIndex(ratingValue)}
              onChange={onChange}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
StarRating.defaultProps = {
  starIndex: () => {},
  rating: 0,
  onChange: () => {},
  hover: null,
  setHover: () => {},
};
