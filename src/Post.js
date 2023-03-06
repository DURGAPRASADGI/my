import React from "react";
import { Link } from "react-router-dom";
const Post = ({ blog, key }) => {
  return (
    <div className="blog">
      <Link to={`/read/${blog.id}`} className="post-link">
        <img src={blog.thumbnail} className="blog-image" alt="" />

        <div className="blog-title">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
