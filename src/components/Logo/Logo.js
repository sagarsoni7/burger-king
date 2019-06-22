import React from "react";
import logoImage from "../../assets/images/logo.jpg";
import logoBurger from "../../assets/images/burger-logo.png"
import classes from "./Logo.module.css";


const Logo=(props)=>(
    <div className={classes.Logo} style={{height: props.height}}> 
    <img src={logoBurger} style={{height: props.heightM}} alt="Burger King"/>  
    <img src={logoImage} style={{height: props.heightM}} alt="Burger King"/>
    <img src={logoBurger} style={{height: props.heightM}} alt="Burger King"/> 
    </div>
    
);

export default Logo;