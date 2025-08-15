import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export interface PostModel {
  id: string;
  author: string;
  body: string;
}

export async function loader(): Promise<PostModel[]> {
  try {
    const response = await fetch("http://localhost:8080/posts");
    if (!response.ok) {
      throw new Response("Failed to fetch posts", { status: response.status });
    }
    const data = await response.json();
    if (!data || !Array.isArray(data.posts)) {
      throw new Response("Malformed posts response", { status: 500 });
    }
    return data.posts as PostModel[];
  } catch (err) {
    if (err instanceof Response) throw err;
    throw new Response("Network error while loading posts", { status: 500 });
  }
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
