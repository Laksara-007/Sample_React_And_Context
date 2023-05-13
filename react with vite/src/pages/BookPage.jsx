import React from "react";
import { books, deleteBook } from "../assets/Data";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function BookPage() {
  let [Available, setAvailable] = useState(true);
  const navigate = useNavigate();

  let bookId = useParams();
  const currentBook = books.filter((book) => book.id == bookId.id);

  function borrow() {
    setAvailable(false);
  }

  function returnBook() {
    setAvailable(true);
  }

  function deleteBookService() {
    deleteBook(currentBook[0].id);
    alert("book deleted");
    navigate("/");
  }

  return (
    <div>
      <Header />
      <h1>BookPage {currentBook[0].name} </h1>

      <Button
        variant="primary"
        size="lg"
        disabled={!Available}
        onClick={borrow}
      >
        borrow
      </Button>

      <Button
        variant="warning"
        size="lg"
        disabled={Available}
        onClick={returnBook}
      >
        Return
      </Button>

      <Button variant="danger" size="lg" onClick={deleteBookService}>
        Delete
      </Button>
    </div>
  );
}
