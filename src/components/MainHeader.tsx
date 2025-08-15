import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        What's on your mind?
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </h1>
      <p>
        <Link className={classes.button} to="/create-post">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
