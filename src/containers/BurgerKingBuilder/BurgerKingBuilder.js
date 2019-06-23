import React, {Component} from "react";
import Aux from "../../hoc/Auxi/Auxi"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build Controls/BuildControls"
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 30,
        purchaseable: false,
        purchasing: false
    }


    updatePurchaseState(yoIngredients){
        const ingredients={
            ...yoIngredients
        };
        const sum=Object.keys(ingredients)
        .map(key=>{
            return ingredients[key];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);

        this.setState({purchaseable: sum>0});
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
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler=()=>{
        this.setState({purchasing: true});
    }

    purchseCancelHandler=()=>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler=()=>{
        alert("Thanks babe for your order!")
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
            <Modal show={this.state.purchasing} modalClosed={this.purchseCancelHandler}>
            <OrderSummary 
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
             />
            </Modal>
            
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            purchasing={this.purchaseHandler}
            />
            </Aux>
        )
    }
}

export default BurgerKingBuilder;