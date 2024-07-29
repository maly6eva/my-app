import React from "react";
import classes from './Post/Post.module.css';
import Post from "./Post/Post";




const MyPost = (props) => {



    let postElements = props.posts.map( p =>  <Post message={p.message} mes={p.mes} des={p.des}/>)


    let addPost =() => {
        alert('samuraijs.com');

    }
    return (
        <div className={classes.postBlock}>
       <h3>My post</h3>
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>


        </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}


export default MyPost;