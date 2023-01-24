import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const slug = useParams().slug;

  return (
    <div>
      <h1>{`Post ${slug}`}</h1>
    </div>
  );
};

export default Post;
