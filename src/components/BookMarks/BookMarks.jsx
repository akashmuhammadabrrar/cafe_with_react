import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:h-1/3 ml-10 mt-6 text-center bg-gray-300">
      <h3 className="text-4xl bg-blue-600 border rounded-xl m-4 p-4">
        Reading Time: {readingTime}__min
      </h3>
      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <BookMark key={idx} bookmark={bookmark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default BookMarks;
