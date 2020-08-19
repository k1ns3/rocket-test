import React from "react";
import styled from "styled-components";
import { Posts } from "../types/Posts";

const Block = styled.div`
  max-width: 700px;
  max-height: 500px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 35px;
  background-color: #fff;
  border-radius: 25px;
  color: #000;
`;
const Title = styled.div`
  display: flex;
  margin-bottom: 15px;
  color: #42b389;
  font-size: 14px;
`;

const PostTitle = styled.h2`
  font-size: 32px;
  letter-spacing: 0.2px;
  line-height: 38px;
`;

const PostDescription = styled.div`
  font-size: 1rem;
  color: #a09f9f;
`;

const Description = styled.p`
  display: block;
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #a09f9f;
`;

const PostBottom = styled.div`
  display: block;
  padding-top: 10%;
`;

const Post = React.memo(function Post({ title, body, name }: Posts) {
  return (
    <Block>
      <Title>Title</Title>
      <PostTitle>{title}</PostTitle>
      <PostDescription>
        <Description>{body}</Description>
      </PostDescription>
      <PostBottom>{name}</PostBottom>
    </Block>
  );
});

export default Post;
