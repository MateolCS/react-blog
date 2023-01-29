import React from "react";
import { createClient } from "contentful";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Post = () => {
  const { slug } = useParams();
  console.log(slug);
  const [post, setPost] = useState({});

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: "blogPost", "fields.slug": slug })
      .then((response) => {
        setPost(response.items[0]);
        console.log(response.items[0]);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <Layout>
      <PageWrapper>
        <h1>{post.fields?.title}</h1>
        <img src={post.fields?.photo.fields.file.url} alt="" />
        <p>{post.fields?.content}</p>
      </PageWrapper>
    </Layout>
  );
};

export default Post;

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
