import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

interface PostModel {
  id: string;
  author: string;
  body: string;
}

function PostsList() {
  const posts = useLoaderData() as PostModel[] | undefined;

  if (!posts || posts.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>
          There are no posts yet. <br /> Start adding some
        </h2>
      </div>
    );
  }

  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
      ))}
    </ul>
  );
}

export default PostsList;
