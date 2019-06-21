import React from "react";
import logoImage from "../../assets/images/logo.jpg";
import logoBurger from "../../assets/images/burger-logo.png"
import classes from "./Logo.module.css";


const Logo=(props)=>(
    <div className={classes.Logo}> 
    <img style={{margin: "3px"}}  src={logoBurger} alt="Burger King"/>  
    <img style={{margin: "3px"}} src={logoImage} alt="Burger King"/>
    <img style={{margin: "3px"}}  src={logoBurger} alt="Burger King"/> 
    </div>
    
);

export default Logo;