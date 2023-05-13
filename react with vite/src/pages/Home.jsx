import React from "react";
import BookCard from "../components/bookCard.jsx";
import { books } from "../assets/Data.js";
import Header from "../components/Header.jsx";

export default function Home() {
  const BookItems = books.map((books) => (
    <BookCard key={books.id} Name={books.name} id={books.id} />
  ));
  return (
    <div>
      <Header />
      <div className="Bookholder">{BookItems}</div>
    </div>
  );
}
