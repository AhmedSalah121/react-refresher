import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import Layout from "./routes/Layout";
import ErrorPage from "./routes/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
            errorElement: <ErrorPage />,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
