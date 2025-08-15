import { MdOpacity } from "react-icons/md";
import classes from "./ErrorPage.module.css";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong fetching data!";
  let message = "Something went wrong, backend unreachable.";
  let statusInfo = null;

  if (isRouteErrorResponse(error)) {
    statusInfo = `${error.status} ${error.statusText}`;
    if (error.data) message = error.data;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div
      style={{
        padding: "2rem",
        alignItems: "flex-end",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>{title}</h1>
      {statusInfo && <p style={{ fontWeight: 600 }}>{statusInfo}</p>}
      <p>{message}</p>
      <p>
        <button className={classes.retryButton} onClick={() => window.location.reload()}>
          Retry
        </button>
      </p>
    </div>
  );
}

export default ErrorPage;
