import React from "react";
import Post from "./Post";
import { Posts } from "../types/Posts";

const PostBlock: React.FunctionComponent<{ posts: any }> = ({ posts }) => {
  return (
    <div>
      {posts && posts.map((post: Posts) => <Post key={post.id} {...post} />)}
    </div>
  );
};

export default PostBlock;
