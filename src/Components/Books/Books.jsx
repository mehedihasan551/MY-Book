import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "../Book/Book";
import LodingSpenar from "../LodingSpenar/LodingSpenar";

const Books = () => {
    const navigation = useNavigation()
    //   console.log(navigation.state)
      if (navigation.state === 'loading') {
        return <LodingSpenar />
      }
  const { books } = useLoaderData();
  //   const { image,price,subtitle,title,url,isbn13 } = books;
  return (
    <div className="my-container">
      <div className=" grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
