import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PostBlock from "./components/PostBlock";
import { Posts } from "./types/Posts";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

const Wrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  max-width: 1400px;
`;

const Content = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [posts, setPosts] = React.useState<Posts[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <Title>Rocket test</Title>
      <Content>
        <PostBlock posts={posts} />
      </Content>
    </Wrapper>
  );
}

export default App;
