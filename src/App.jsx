import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  //  set reading time
  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    // console.log("remove bookmark", id);
    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };

  // remove the read blog from bookmark

  // adding bookmark
  const handleBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  );
}

export default App;
