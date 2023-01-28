import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PostPreview = ({ post }) => {
  return (
    <StyledArticle>
      <h2>{post.fields.title}</h2>
      <img src={post.fields.photo.fields.file.url} alt="" />
      <p>{post.fields.preview}</p>
      <StyledLink to={`/${post.fields.slug}`}>Read More</StyledLink>
    </StyledArticle>
  );
};

export default PostPreview;

const StyledArticle = styled.article`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    font-size: 1.3rem;
    color: #0081cf;
    font-weight: 600;
    text-align: left;
  }

  img {
    width: 100%;
  }

  p {
    text-align: justify;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #008e9b;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    background-color: #845ec2;
    cursor: pointer;
  }
`;
