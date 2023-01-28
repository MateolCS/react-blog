import React from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({
        content_type: "blogPost",
      })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  console.log(posts);

  return (
    <Layout>
      {posts.map((post) => {
        return <PostPreview key={post.sys.id} post={post} />;
      })}
    </Layout>
  );
};

export default Home;
