import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/wordle">Wordle</Link>
    </div>
  );
};

export default Home;
