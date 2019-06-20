import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary =(props)=>{

        const ingredientsSummary=Object.keys(props.ingredients)
        .map(key=>{
            return <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span>: {props.ingredients[key]}</li>
        })

        return(
            <Aux>
            <h3>Your Order from BurgerKing</h3>
            <p>A delicious burger is here with the following ingredients:</p>
            <ul>
            {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Aux>
        );
}

export default OrderSummary;