import React from "react";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const RandomPost = () => {
  const [posts, setPosts] = useState({});
  const [randomPost, setRandomPost] = useState({});

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
        setRandomPost(
          response.items[Math.floor(Math.random() * response.items.length)]
        );
      })
      .catch(console.error);
  }, []);

  console.log(posts.length);

  return (
    <Layout>
      <PageWrapper>
        <h1>{randomPost.fields?.title}</h1>
        <img src={randomPost.fields?.photo.fields.file.url} alt="" />
        <p>{randomPost.fields?.content}</p>
      </PageWrapper>
    </Layout>
  );
};

export default RandomPost;

const PageWrapper = styled.div`
width 90%;
margin: 0 auto;
padding: 1rem 0;

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #462784;
}

img {
  width: 100%;
  padding: 1rem 0;
}

p {
  text-align: center;
}


@media (min-width: 768px) {
  img{
    width: 50%;
    margin: 0 auto;
    display: block;
  }

  h1{
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
    width: 80%;
    margin: 0 auto;
  }
}

`;
