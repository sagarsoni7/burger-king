import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props)=>{

    let transformedIngredients= Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_,i)=>{
           return <BurgerIngredient key={key +i} type={key} />
        })
    }).reduce((arr, el)=>{
        return arr.concat(el)
    },[]);

    if(transformedIngredients.length===0){
        transformedIngredients= <p>Please add the ingredients</p>
    }

     return(
         <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />
         
         </div>
     );
};

export default burger;