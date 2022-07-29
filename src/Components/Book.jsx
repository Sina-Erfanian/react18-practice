import React from "react";
import { useParams , useNavigate , useLocation } from "react-router-dom";
import { getBook , deleteBook } from "../data/data";

function Book() {
  const myBook = useParams();
  const findBook = getBook(Number(myBook.uniqId));
  const navigator = useNavigate()
  const location = useLocation()
  console.log(location);
  if (findBook) {
    return (
      <>
        <p>{findBook.name}</p>
        <button onClick={()=> {
          deleteBook(findBook.id)
          navigator(`/books${location.search}`)
        }}>Delete</button>
      </>
    );
  } else {
    return <h2>Your book is not available</h2>;
  }
}

export default Book;
