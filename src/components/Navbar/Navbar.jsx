import React from "react";
import classes from'./Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" className={ navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/dialogs" className={ navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
        </div>





        <div className={classes.item} >
            <Link to="#">News</Link>
        </div>
        <div className={classes.item}>
            <Link to="#">Music</Link>
        </div>
        <div className={classes.item}>
            <Link to="#">Settings</Link>
        </div>
    </nav>
)

export default Navbar;