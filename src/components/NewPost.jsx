import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
    const [body, setBody] = useState('');
    const [author, setTitle] = useState('');

    function changeBodyHandler(event) {
        setBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setTitle(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: body,
            author: author
        };
        console.log(postData);
        props.onAddPost(postData);
        props.onCancel();
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Post content</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Author name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>'
        <button type="submit">Post</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </p>
    </form>
  );
}

export default NewPost;
