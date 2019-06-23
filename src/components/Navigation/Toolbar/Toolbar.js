import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar =(props)=>(
    <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <Logo logoType="logoBurgerKing" height="70%" style={{float: "right"}} />
    <nav className={classes.DesktopOnly}>
    <NavigationItems/>
    </nav>
    </header>
);


export default Toolbar;