import React from "react";
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/736x/af/22/a2/af22a20c3c6536117253e0419b466c24.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span>
                {props.mes}
            </div>
            <div>
                <span>dislike</span>
                {props.des}
            </div>

        </div>
    )
}


export default Post;