import React from "react";

import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </div>

    )
}


export default ProfileInfo;