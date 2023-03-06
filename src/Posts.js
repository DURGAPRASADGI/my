import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [record, setrecord] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setBlogs(res.data.products);
        console.log(res.data.products);
        setrecord(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  const getInputData = (event) => {
    setBlogs(
      record.filter((r) =>
        r.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="posts">
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          onInput={getInputData}
        />
      </div>
      <div className="blog-icon">
        <h3>Blogs</h3>
        <i class="fa- fa-calculator"></i>
      </div>
      <div className="posts-container">
        {blogs.map((blog, index) => (
          <Post blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
