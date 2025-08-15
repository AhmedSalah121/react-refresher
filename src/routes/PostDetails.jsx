import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

export async function loader({ params }) {
  try {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`);
    if (!response.ok) {
      throw new Response("Failed to fetch post", { status: response.status });
    }
    const data = await response.json();
    if (!data || !data.post) {
      throw new Response("Post not found", { status: 404 });
    }
    return data.post;
  } catch (err) {
    if (err instanceof Response) throw err;
    throw new Response("Network error while loading post", { status: 500 });
  }
}

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
