import React,{Component} from "react";
import Aux from "../../../hoc/Auxi/Auxi";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{
    // ye functional component bhi ho skta tha
    componentWillUpdate(){
        console.log("OrderSummary componentwillupdate")
    }


    render(){
        const ingredientsSummary=Object.keys(this.props.ingredients)
        .map(key=>{
            return <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span>: {this.props.ingredients[key]}</li>
        })

        return(
            <Aux>
            <h3>Your Order from BurgerKing</h3>
            <p>A delicious burger is here with the following ingredients:</p>
            <ul>
            {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    };
} 

export default OrderSummary;