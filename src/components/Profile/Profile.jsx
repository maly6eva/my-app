import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.posts} />
        </div>

    )
}


export default Profile;