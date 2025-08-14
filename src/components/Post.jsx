import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <Link to={`/${props.id}`}>
        <h2 className={classes.author}>{props.author}</h2>
        <p className={classes.body}>{props.body}</p>
      </Link>
    </li>
  );
}

export default Post;
