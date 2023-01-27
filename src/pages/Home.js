import React from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const Home = () => {
  const [posts, setPosts] = useState([]);

  console.log(process.env.REACT_APP_SPACE_ID);
  console.log(process.env.REACT_APP_ACCESS_TOKEN);

  useEffect(() => {
    const client = createClient({
      space: "fxxwtp95x4er",
      accessToken: "ixd-sfqky4Ou0wkZh2psg4UHBXxiYor2WCGjRZgTvcg",
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
