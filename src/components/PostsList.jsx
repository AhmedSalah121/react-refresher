import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData();
  console.log(typeof posts);

  return (
    <>
      {posts && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts && posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>
            There are no posts yet. <br></br> Start adding some
          </h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
