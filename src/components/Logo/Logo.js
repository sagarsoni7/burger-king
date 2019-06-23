import React from "react";
import logoMcd from "../../assets/images/mcd.png";
import logoBK from "../../assets/images/logo.jpg"
import classes from "./Logo.module.css";


const Logo=(props)=>{
    const logoBurgerKing= logoBK;
    const logoMcDonalds=logoMcd;

    return (
        <div className={classes.Logo} style={{height: props.height}}> 
        
        <img src={eval(props.logoType)} style={{height: props.heightM}} alt="Burger King"/>
        
        </div>
        
    );
}




export default Logo;