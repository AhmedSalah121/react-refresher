import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  if (!response || !data) {
    throw new Response(JSON.stringify({ message: "Failed to fetch posts." }), {
      status: 404,
    });
  }
  return data.posts;
}

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
