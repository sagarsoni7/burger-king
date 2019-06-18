import React, {Component} from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredients.module.css";
                      

class BurgerIngredient extends Component {
    render(){
        let ingredient=null;

    switch(this.props.type){

        case("bread-bottom"):
        ingredient=<div className={classes.BreadBottom}></div>
        break;

        case("bread-top"):
        ingredient=(
            <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
            </div>)
        break;


        case("chowmein"):
        ingredient=<div className={classes.Chowmein}></div>
        break;

        case("cheese"):
        ingredient=<div className={classes.Cheese}></div>
        break;

        case("mayonnaise"):
        ingredient=<div className={classes.Mayonnaise}></div>
        break;

        case("tikki"):
        ingredient=<div className={classes.Tikki}></div>
        break;

        default:
            ingredient= null;
            break;
    }

    return ingredient
    }
};

BurgerIngredient.propTypes={
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;