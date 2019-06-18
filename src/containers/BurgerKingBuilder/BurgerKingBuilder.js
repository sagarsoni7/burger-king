import React, {Component} from "react";
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build Controls/BuildControls"


const INGREDIENT_PRICES={
    chowmein: 20,
    cheese: 40,
    mayonnaise: 60,
    tikki: 100
};


class BurgerKingBuilder extends Component{

    state={
        ingredients:{
            chowmein:0,
            cheese: 0,
            mayonnaise: 0,
            tikki: 0
        },
        totalPrice: 30
    }

    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount + 1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;

        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice= oldPrice+ priceAddition;

        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
    }

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount=oldCount - 1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;

        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice= oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
    }

    render(){

        const disabledInfo={
            ...this.state.ingredients
         }

         for(let key in disabledInfo){
             disabledInfo[key]= disabledInfo[key] <=0
         }

        return (
            <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            />
            </Aux>
        )
    }
}

export default BurgerKingBuilder;