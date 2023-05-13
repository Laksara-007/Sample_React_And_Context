import React from "react";
import { Link } from "react-router-dom";

export default function bookCard({ Name, id }) {
  const link = "/book/" + id;
  return (
    <Link to={`/book/${id}`}>
      <div className="BookCard">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          alt="book"
        />
        <h3>{Name}</h3>
      </div>
    </Link>
  );
}
