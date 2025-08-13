import NewPost from "./NewPost";
import classes from './Posts.module.css';
import Modal from "./Modal";
import { useState, useEffect } from "react";
import Post from "./Post";

function Posts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        // arrow function cuz the current state depends on the previous state 
        setPosts((prevPosts) => [postData, ...prevPosts]);
    }

    return (
        <>
            {props.isPosting && <Modal onClose={props.onStopPost}>
                <NewPost 
                    onCancel={props.onStopPost}
                    onAddPost={addPostHandler}
                />
            </Modal>}
            {/* hide when there is no posts */}
            {posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post, index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>}
            
            {posts.length == 0 && <div style={{textAlign: 'center'}}>
                <h2>There are no posts yet. <br></br> Start adding some</h2></div>}
        </>
    )
}

export default Posts;
