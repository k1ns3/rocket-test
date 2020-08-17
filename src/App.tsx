import React from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import { Posts } from "./types/Posts";
import Post from "./components/Post";

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

const SearchBlock = styled.div`
  text-align: center;
`;

const SearchField = styled.input`
  width: 65%;
  margin: 0 auto;
  max-height: 40px;
  font-size: 1.5em;
  border-radius: 15px;
  padding-left: 20px;
  opacity: 0.5;
`;

function App() {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const [search, setSearch] = React.useState("");
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    setFilteredPosts(
      posts.filter((post: any) =>
        post.body.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, posts]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Title>Rocket test</Title>
      <SearchBlock>
        <SearchField
          type="text"
          onChange={(event: any) => setSearch(event.target.value)}
          placeholder="Search..."
        />
      </SearchBlock>
      <Content>
        {filteredPosts &&
          filteredPosts.map((post: Posts) => <Post key={post.id} {...post} />)}
      </Content>
    </Wrapper>
  );
}

export default App;
