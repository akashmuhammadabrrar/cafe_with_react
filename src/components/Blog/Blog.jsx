import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    title,
    id,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h4 className="text-2xl">{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleBookMark(blog)}
            className="ml-2 text-2xl">
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-blue-700 font-bold underline">
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
