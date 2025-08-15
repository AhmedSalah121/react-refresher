import { Link } from "react-router-dom";
import classes from "./Post.module.css";
interface PostProps {
  id: string;
  author: string;
  body: string;
}

function Post({ id, author, body }: PostProps) {
  return (
    <li className={classes.post}>
      <Link to={`/${id}`}>
        <h2 className={classes.author}>{author}</h2>
        <p className={classes.body}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
