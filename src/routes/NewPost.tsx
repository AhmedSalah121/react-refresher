import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData) as { body: string; author: string };
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Post content</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Author name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <button type="submit">Post</button>
          <Link to={-1 as any}>Cancel</Link>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
