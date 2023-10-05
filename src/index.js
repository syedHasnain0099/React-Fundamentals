import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  const displayValue = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    console.log(selectedBook);
  };
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              number={index}
              displayValue={displayValue}
            />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
