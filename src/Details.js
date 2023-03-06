import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState([]);
  const [imageArray, setimageArray] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + id)
      .then((res) => {
        setPost(res.data);
        setimageArray(res.data.images);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="detail-post-container">
      <div className="title-description">
        <h2>{post.title}</h2>

        <p>{post.description}</p>
      </div>
      <div className="image-container">
        {imageArray.map((image, index) => (
          <img src={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Details;
